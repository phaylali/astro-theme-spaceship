import websiteConfig from "../../website.config.mjs";
import type { DocumentContext, PageContext } from "../types";

export const buildPage = (doc: DocumentContext, lang = websiteConfig.defaultLanguage): PageContext => {
  return {
    title: doc.data.title,
    language: lang,
    seo: {
      title: doc.data.title,
      description: doc.data.description,
      keywords: doc.data.tags?.join(', '),
    }
  }
}