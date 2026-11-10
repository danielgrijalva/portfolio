import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// Most of the site is prerendered to static HTML. The photo pages render on
// the Worker so they always show what's currently on Flickr.
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  adapter: cloudflare({
    // Optimise the avatar and project banners at build time with sharp, and
    // don't provision the Cloudflare Images binding.
    imageService: "compile",
  }),
  session: false,
});
