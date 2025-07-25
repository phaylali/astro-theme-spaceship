import { ObsidianDocumentSchema, ObsidianMdLoader } from "astro-loader-obsidian";
import { defineCollection, z } from 'astro:content';

import config from '@/config';
import { DOCUMENTS_COLLECTION_NAME } from '@/constants';


export default {
  [DOCUMENTS_COLLECTION_NAME]: defineCollection({
    loader: ObsidianMdLoader({
      author: config.author,
      base: 'src/content/vault',
      url: '',
      wikilinkFields: ['relateds']
    }),
    schema: ({ image }) => ObsidianDocumentSchema.extend({
      image: image().optional(),
      // or
      subtitle: z.string().optional(),
      cover: image().optional(),
      'cover-x': z.number().optional(),
      'cover-y': z.number().optional(),
      order: z.number().optional(),
    }),
  })
}