/**
 * Reads the latest public uploads from Flickr's public feed.
 *
 * The feed needs no API key (Flickr only issues keys to Pro accounts), but it
 * only returns the 20 most recent photos and nothing about albums. Responses
 * are kept in memory for an hour per Worker instance and Flickr's response is
 * also cached at Cloudflare's edge where that's available. Failures are never
 * cached.
 */

export const FLICKR_USER_ID = "160683339@N02";
export const PROFILE_URL = "https://www.flickr.com/photos/danielgrijalvas/";

const FEED = `https://www.flickr.com/services/feeds/photos_public.gne?id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`;
const TTL_MS = 60 * 60 * 1000;

/** Flickr size suffixes that share the feed's secret, with their long edge. */
const SIZES = [
  ["z", 640],
  ["c", 800],
  ["b", 1024],
] as const;

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Photo {
  id: string;
  title: string;
  takenAt?: string;
  width: number;
  height: number;
  /** Smallest to largest. */
  sources: Source[];
  /** The photo's page on Flickr. */
  pageUrl: string;
}

export class FlickrError extends Error {}

interface FeedItem {
  title: string;
  link: string;
  media: { m: string };
  date_taken?: string;
  description: string;
}

function toPhoto(item: FeedItem): Photo | undefined {
  // The feed only gives the small "_m" image; its <img> tag has the size,
  // which is all we need for the aspect ratio.
  const w = Number(item.description.match(/width="(\d+)"/)?.[1]);
  const h = Number(item.description.match(/height="(\d+)"/)?.[1]);
  const base = item.media.m.match(/^(.*)_m\.jpg$/)?.[1];
  if (!w || !h || !base) return undefined;

  const sources = SIZES.map(([suffix, long]) => {
    const scale = long / Math.max(w, h);
    return { url: `${base}_${suffix}.jpg`, width: Math.round(w * scale), height: Math.round(h * scale) };
  });
  const largest = sources[sources.length - 1];
  return {
    id: item.link.match(/\/(\d+)\/?$/)?.[1] ?? base,
    title: item.title.trim(),
    takenAt: item.date_taken || undefined,
    width: largest.width,
    height: largest.height,
    sources,
    pageUrl: item.link,
  };
}

let memo: { at: number; photos: Photo[] } | undefined;

/** The most recent public uploads, newest first (at most 20). */
export async function recentPhotos(): Promise<Photo[]> {
  if (memo && Date.now() - memo.at < TTL_MS) return memo.photos;

  const res = await fetch(FEED, {
    headers: { "User-Agent": "danielgrijalva-portfolio (+https://danielgrijalva-portfolio.beemaps.workers.dev)" },
    cf: { cacheTtl: 3600, cacheEverything: true },
  } as RequestInit);
  if (!res.ok) throw new FlickrError(`Flickr feed: HTTP ${res.status}`);

  // Flickr escapes apostrophes as \' which isn't valid JSON.
  const text = (await res.text()).replace(/\'/g, "'");
  const items = (JSON.parse(text) as { items: FeedItem[] }).items;
  const photos = items.map(toPhoto).filter((p): p is Photo => !!p);

  memo = { at: Date.now(), photos };
  return photos;
}

/** "srcset" for an <img>, from Flickr's sizes. */
export const srcset = (photo: Photo) => photo.sources.map((s) => `${s.url} ${s.width}w`).join(", ");

/** A mid-size source to use as the plain `src`. */
export const fallbackSource = (photo: Photo) => photo.sources.find((s) => s.width >= 800) ?? photo.sources[photo.sources.length - 1];

/** One line under a photo: "Title · 2021". */
export const details = (photo: Photo) => [photo.title, photo.takenAt?.slice(0, 4)].filter(Boolean).join(" · ");
