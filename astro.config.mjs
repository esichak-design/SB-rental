// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: set this to your production domain, and keep `site.url` in
  // src/data/site.ts matching. It powers canonical URLs, the Open Graph tags
  // used for link previews, and the generated sitemap.
  site: 'https://example.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
