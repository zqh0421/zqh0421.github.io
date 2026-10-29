import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://zqh0421.github.io',
  integrations: [sitemap()],
  // Old v2 pages, so existing links still land somewhere useful.
  redirects: {
    '/about': '/',
    '/project': '/',
    '/blog': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
