# Daniel Grijalva

Personal site, built with [Astro](https://astro.build) and Tailwind, hosted on Cloudflare.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run deploy    # build and publish to Cloudflare (uses your Wrangler login)
```

## Photos

Photos live in the R2 bucket `danielgrijalva`, served from `https://photos.overworld.space`.
The list of photos on the site is `src/data/photos.json`.

```bash
npm run photos:add -- ~/Pictures/roll-12            # a folder or individual files
npm run photos:add -- ~/Pictures/roll-12 --dry-run  # resize only, no upload
npm run photos:remove -- <photo id>
```

`photos:add` resizes each photo to 800, 1600 and 2400 px wide (never upscaling), saves
AVIF and JPEG versions, uploads them to R2, and adds an entry to the top of
`photos.json`. Photos already uploaded are skipped. Afterwards, fill in `alt` (and
optionally `caption` and `film`) for each new entry, then commit and deploy.

Original files are never uploaded; keep them in your own backup.
