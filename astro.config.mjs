import pagefind from "astro-pagefind";
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import markdown from "./astro/markdown/config.mjs";

import websiteConfig from './website.config.json';

// https://astro.build/config
export default defineConfig({
  site: websiteConfig.site,
  base: websiteConfig.base,
  build: {
    format: 'file',
  },
  i18n: {
    defaultLocale: websiteConfig.defaultLanguage,
    locales: [websiteConfig.defaultLanguage],
  },
  markdown,
  integrations: [
    pagefind(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});