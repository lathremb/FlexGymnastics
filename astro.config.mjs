// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://flexgymnasticsaz.com',
  // WordPress URLs end in a slash (/girls-classes/) — keep that to protect SEO.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(classes-orig|online-fun-workouts|404)\/?$/.test(page),
    }),
  ],
  // Old URLs that moved. On static hosts these become meta-refresh pages;
  // vercel.json / public/_redirects make them real 301s (see README).
  redirects: {
    '/classes-orig': '/classes/',
    '/online-fun-workouts': '/',
  },
});
