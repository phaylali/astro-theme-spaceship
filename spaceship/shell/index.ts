import pagefind from "astro-pagefind";
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import type { WebsiteContext } from '@/types';

import markdown from "./markdown";
import type { AstroUserConfig } from "astro";

export const create = (websiteConfig: WebsiteContext): AstroUserConfig<[string], never, never> =>
  ({
    site: websiteConfig.site,
    base: websiteConfig.base,
    build: {
      format: 'file',
    },
    i18n: {
      defaultLocale: websiteConfig.defaultLocale,
      locales: [websiteConfig.defaultLocale],
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