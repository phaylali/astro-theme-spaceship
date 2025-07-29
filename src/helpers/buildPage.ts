import websiteConfig from "@/config";
import type { DocumentContext, PageContext, TagContext } from "@/types";

const shortenText = (text: string, length: number) => {
  if (text.length > length) {
    return `${text.substring(0, length - 3)}...`;
  }
  return text;
}

export const buildPage = (doc: DocumentContext, language = websiteConfig.defaultLocale): PageContext => {

  const docDescription = doc.data.description ?? doc.data.subtitle;

  const title = doc.data.title;
  const description = docDescription && shortenText(docDescription, 160);
  const keywords = doc.data.tags?.join(', ');
  const image = doc.data.cover?.src;
  const siteName = websiteConfig.title;


  return {
    title,
    language,
    seo: {
      title,
      description,
      keywords,
      image,
      openGraph: {
        description,
        image,
        title,
        siteName,
      },
      twitter: {
        description,
        image,
        title,
      },
    }
  }
}

export const buildTagPage = (tag: TagContext, language = websiteConfig.defaultLocale): PageContext => {

  const docDescription = tag.data.description;

  const title = tag.data.name;
  const description = docDescription && shortenText(docDescription, 160);
  const keywords = tag.data.name;
  const siteName = websiteConfig.title;


  return {
    title,
    language,
    seo: {
      title,
      description,
      keywords,
      openGraph: {
        description,
        title,
        siteName,
      },
      twitter: {
        description,
        title,
      },
    }
  }
}