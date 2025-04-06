import { type CollectionEntry } from "astro:content";

export type WebsiteContext = {
  title: string;
  defaultLanguage: string;
};

export type Seo = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
};

export type PageContext = {
  language: string;
  title: string;
  seo: Seo;
};

export type AuthorContext = CollectionEntry<"authors">;
export type DocumentContext = CollectionEntry<"documents">;
export type TagsContext = {
  tags: CollectionEntry<"tags">[];
};

export type Node<T> = {
  name: string;
  children?: Node<T>[];
  data?: T;
};

export type NavigationContext = {
  tree: Node<CollectionEntry<"documents">>[];
  backlinks: CollectionEntry<"documents">[];
};
