import type { DocumentContext, PageContext, WebsiteContext } from "../../types";

export const document: DocumentContext = {
  id: "spaceship",
  collection: "documents",
  data: {
    title: "Spaceship",
    description: "Astro Template for publishing your Obsidian Vault",
    author: "Spaceship",
    created: new Date("2023-01-01"),
    updated: new Date("2023-01-01"),
    permalink: "/spaceship",
  },
};

export const page: PageContext = {
  seo: {
    title: "Spaceship",
    description: "Astro Template for publishing your Obsidian Vault",
  },
  title: "Spaceship",
  language: "en",
};

export const website: WebsiteContext = {
  title: "Spaceship",
};
