import type { CollectionEntry } from "astro:content";

export type WebsiteContext = {
  author?: string;
  base?: string;
  defaultLocale: string;
  description?: string;
  site?: string;
  title: string;
  displayOptions?: {
    showAuthor?: boolean;
    showPublishDate?: boolean;
  }
};

export type Seo = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    siteName?: string;
  };
  twitter?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

export type PageContext = {
  language: string;
  title: string;
  seo: Seo;
};

export type AuthorContext = CollectionEntry<"authors">;
export type DocumentContext = CollectionEntry<"documents">;
export type TagContext = CollectionEntry<"tags">;
export type TagsContext = {
  tags: CollectionEntry<"tags">[];
};

export type Node<T> = {
  name: string;
  permalink: string;
  children?: Node<T>[];
  data?: T;
};

export type NavigationContext = {
  tree: Node<CollectionEntry<"documents">>[];
  backlinks: CollectionEntry<"documents">[];
};

export type KnowledgeGraphData = {
  nodes: KnowledgeGraphNode[];
  links: KnowledgeGraphLink[];
}

export type KnowledgeGraphNode = {
  id: string;
  href?: string;
  title?: string;
  group?: string;
  radius: number;
}

export type KnowledgeGraphLink = {
  source: string;
  target: string;
  value: number;
}