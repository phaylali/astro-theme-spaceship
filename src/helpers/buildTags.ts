import type { CollectionEntry } from "astro:content";
import { toUrl } from "astro-loader-obsidian";
import { join } from "node:path";

import type { DocumentContext, TagsContext } from "@/types";
import config from '@/config';

export const buildTags = (
  doc: DocumentContext,
  tags: CollectionEntry<"tags">[] = []
): TagsContext => {
  const docTags = doc.data.tags?.filter((dt) => !tags.some((t) => t.id === dt)) ?? [];

  return {
    tags: tags.map(t => ({
      ...t,
      data: {
        ...t.data,
        permalink: toUrl(t.id, join(config.base, '/tags'), false, config.defaultLocale)
      }
    })).concat(
      (docTags.filter(Boolean) as string[]).map((t) => ({
        id: t,
        collection: "tags",
        data: {
          name: t,
          permalink: toUrl(t, join(config.base, '/tags'), false, config.defaultLocale)
        },
      }))
    ),
  };
};
