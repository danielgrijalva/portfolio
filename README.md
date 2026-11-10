# Daniel Grijalva

Personal site, built with [Astro](https://astro.build) and Tailwind, hosted on Cloudflare.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static pages and the Worker, in dist/
npm run deploy    # build and publish to Cloudflare (uses your Wrangler login)
```

## Photos

Photos come from Flickr ([danielgrijalvas](https://www.flickr.com/photos/danielgrijalvas/)) through its public
feed, which needs no API key but only returns the 20 most recent public uploads. `/photos` and the photo strip on
the home page render on the Worker and cache the feed for about an hour, so new uploads show up on their own with no
deploy. The code is in `src/lib/flickr.ts`.
