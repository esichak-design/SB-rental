// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production domain. Powers canonical URLs, the Open Graph tags used for link
  // previews, and the generated sitemap. Keep `site.url` in src/data/site.ts
  // and the Sitemap line in public/robots.txt matching this.
  site: 'https://325sierra.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
