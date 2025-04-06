// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import websiteConfig from './website.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitorllj93.github.io',
  base: 'astro-theme-spaceship',
  i18n: {
    defaultLocale: websiteConfig.defaultLanguage,
    locales: [websiteConfig.defaultLanguage],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});