import { glob } from "astro/loaders";
import { defineCollection, z } from 'astro:content';

import { TAGS_COLLECTION_NAME } from '@/constants';


export default {
	[TAGS_COLLECTION_NAME]: defineCollection({
		loader: glob({ pattern: "**/*.yml", base: "./src/content/tags" }),
		schema:  () => z.object({
			name: z.string(),
			description: z.string().optional(),
			permalink: z.string().optional(),
		})
	})
};
