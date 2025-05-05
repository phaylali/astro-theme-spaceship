import { defineConfig } from 'astro/config';

import remarkEmbedder from '@remark-embedder/core';
import remarkEmbedderOembed from '@remark-embedder/transformer-oembed';
import tailwindcss from '@tailwindcss/vite';
import remarkObsidianCallout from 'remark-obsidian-callout';

import websiteConfig from './website.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitorllj93.github.io',
  base: websiteConfig.base,
  i18n: {
    defaultLocale: websiteConfig.defaultLanguage,
    locales: [websiteConfig.defaultLanguage],
  },
  markdown: {
    remarkPlugins: [ remarkObsidianCallout, [remarkEmbedder.default, {
      transformers: [
        [remarkEmbedderOembed.default]
      ],
    }] ],
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