import { ObsidianDocumentSchema, ObsidianMdLoader } from "astro-loader-obsidian";
import { defineCollection } from 'astro:content';

import config from '../website.config.mjs';
import { DOCUMENTS_COLLECTION_NAME } from './constants';

export const collections = {
	[DOCUMENTS_COLLECTION_NAME]: defineCollection({
		loader: ObsidianMdLoader({
			author: config.author,
			base: 'src/content/vault',
			url: '',
		}),
		schema: ({ image }) => ObsidianDocumentSchema.extend({
      image: image().optional(),
      // or
      cover: image().optional(),
    }),
	})
};
