#!/usr/bin/env node
// Resize photos, upload them to R2, and keep src/data/photos.json in sync.
//
//   npm run photos:add -- <file or folder> [...more] [--dry-run]
//   npm run photos:remove -- <photo id>
//
// Each photo is resized to a few widths, saved as AVIF and JPEG, and uploaded
// to the R2 bucket under <id>/<width>.<ext>. Uploads use your Wrangler login.

import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import exifr from "exifr";
import sharp from "sharp";

const BUCKET = "danielgrijalva";
const WIDTHS = [800, 1600, 2400];
const FORMATS = {
  avif: { contentType: "image/avif", encode: (img) => img.avif({ quality: 55, effort: 4 }) },
  jpg: { contentType: "image/jpeg", encode: (img) => img.jpeg({ quality: 82, mozjpeg: true }) },
};
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"]);
const UPLOAD_CONCURRENCY = 4;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "src/data/photos.json");
const run = promisify(execFile);

const readManifest = async () => JSON.parse(await readFile(manifestPath, "utf8"));
const writeManifest = (photos) => writeFile(manifestPath, JSON.stringify(photos, null, 2) + "\n");

const slugify = (name) =>
  name
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "photo";

async function expand(inputs) {
  const files = [];
  for (const input of inputs) {
    const info = await stat(input);
    if (info.isDirectory()) {
      const entries = await readdir(input);
      files.push(...(await expand(entries.sort().map((e) => path.join(input, e)))));
    } else if (EXTENSIONS.has(path.extname(input).toLowerCase())) {
      files.push(input);
    }
  }
  return files;
}

async function wrangler(args) {
  // `npx` resolves the project's wrangler; shell is needed for npx on Windows.
  const quoted = args.map((a) => (/[\s"]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a));
  await run("npx", ["wrangler", ...quoted], { cwd: root, shell: true, maxBuffer: 10 * 1024 * 1024 });
}

async function inParallel(items, limit, fn) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) await fn(queue.shift());
  });
  await Promise.all(workers);
}

async function readExif(file) {
  try {
    const exif = await exifr.parse(file, ["DateTimeOriginal", "Make", "Model", "LensModel"]);
    if (!exif) return {};
    const camera = [exif.Make, exif.Model].filter(Boolean).join(" ").trim();
    return {
      takenAt: exif.DateTimeOriginal instanceof Date ? exif.DateTimeOriginal.toISOString().slice(0, 10) : undefined,
      camera: camera || undefined,
      lens: exif.LensModel || undefined,
    };
  } catch {
    return {}; // Film scans often have no EXIF; that's fine.
  }
}

async function add(inputs, { dryRun }) {
  if (!inputs.length) throw new Error("Pass at least one photo or folder.");
  const files = await expand(inputs);
  if (!files.length) throw new Error(`No photos found (looked for ${[...EXTENSIONS].join(", ")}).`);

  const manifest = await readManifest();
  const known = new Set(manifest.map((p) => p.id));
  const added = [];

  for (const file of files) {
    const bytes = await readFile(file);
    const hash = createHash("sha256").update(bytes).digest("hex").slice(0, 8);
    const id = `${slugify(path.parse(file).name)}-${hash}`;
    if (known.has(id)) {
      console.log(`skip  ${path.basename(file)} (already uploaded as ${id})`);
      continue;
    }

    // .rotate() applies the EXIF orientation so portrait shots stay portrait.
    const base = sharp(bytes).rotate();
    const { width: fullWidth, height: fullHeight } = await base
      .clone()
      .toBuffer({ resolveWithObject: true })
      .then((r) => r.info);
    const widths = [...new Set(WIDTHS.map((w) => Math.min(w, fullWidth)))];

    const outDir = path.join(tmpdir(), "portfolio-photos", id);
    await mkdir(outDir, { recursive: true });
    const outputs = [];
    for (const width of widths) {
      for (const [ext, format] of Object.entries(FORMATS)) {
        const out = path.join(outDir, `${width}.${ext}`);
        await format.encode(base.clone().resize({ width, withoutEnlargement: true })).toFile(out);
        outputs.push({ out, key: `${id}/${width}.${ext}`, contentType: format.contentType });
      }
    }

    const largest = Math.max(...widths);
    const entry = {
      id,
      alt: "",
      caption: "",
      width: largest,
      height: Math.round((fullHeight * largest) / fullWidth),
      widths,
      ...(await readExif(bytes)),
      addedAt: new Date().toISOString(),
    };

    if (dryRun) {
      console.log(`dry   ${path.basename(file)} → ${outDir} (${outputs.length} files, not uploaded)`);
      continue;
    }

    process.stdout.write(`up    ${path.basename(file)} → ${id} `);
    await inParallel(outputs, UPLOAD_CONCURRENCY, async ({ out, key, contentType }) => {
      await wrangler([
        "r2", "object", "put", `${BUCKET}/${key}`,
        "--file", out,
        "--content-type", contentType,
        "--cache-control", "public, max-age=31536000, immutable",
        "--remote",
      ]);
      process.stdout.write(".");
    });
    process.stdout.write(" done\n");
    await rm(outDir, { recursive: true, force: true });

    // Save after each photo so a failure halfway through keeps earlier uploads.
    manifest.unshift(entry);
    known.add(id);
    added.push(entry);
    await writeManifest(manifest);
  }

  if (added.length) {
    console.log(`\nAdded ${added.length} photo(s) to src/data/photos.json (newest first).`);
    console.log("Fill in each one's \"alt\" (and optional \"caption\" / \"film\") before publishing.");
  }
}

async function remove(ids) {
  if (!ids.length) throw new Error("Pass the id of the photo to remove (see src/data/photos.json).");
  const manifest = await readManifest();
  for (const id of ids) {
    const photo = manifest.find((p) => p.id === id);
    if (!photo) throw new Error(`No photo with id "${id}" in src/data/photos.json.`);
    const keys = photo.widths.flatMap((w) => Object.keys(FORMATS).map((ext) => `${id}/${w}.${ext}`));
    await inParallel(keys, UPLOAD_CONCURRENCY, (key) =>
      wrangler(["r2", "object", "delete", `${BUCKET}/${key}`, "--remote"]),
    );
    manifest.splice(manifest.indexOf(photo), 1);
    await writeManifest(manifest);
    console.log(`removed ${id}`);
  }
}

const [command, ...rest] = process.argv.slice(2);
const flags = new Set(rest.filter((a) => a.startsWith("--")));
const args = rest.filter((a) => !a.startsWith("--"));

try {
  if (command === "add") await add(args, { dryRun: flags.has("--dry-run") });
  else if (command === "remove") await remove(args);
  else throw new Error("Usage: photos.mjs add <files/folders> [--dry-run] | remove <id>");
} catch (error) {
  console.error(`\n${error.stderr || error.message}`);
  process.exit(1);
}
