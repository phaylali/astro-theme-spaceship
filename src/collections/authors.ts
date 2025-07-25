import { glob } from "astro/loaders";
import { defineCollection, z } from 'astro:content';

import { AUTHORS_COLLECTION_NAME } from '@/constants';


export default {
	[AUTHORS_COLLECTION_NAME]: defineCollection({
		loader: glob({ pattern: "**/*.yml", base: "./src/content/authors" }),
		schema:  ({ image }) => z.object({
			name: z.string(),
			avatar: image().optional(),
			title: z.string().optional(),
			description: z.string().optional(),
		})
	}),
};
