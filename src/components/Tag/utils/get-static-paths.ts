
import { getCollection } from "astro:content";

import {
	DOCUMENTS_COLLECTION_NAME,
	TAGS_COLLECTION_NAME,
} from "@/constants";
import type {
	AuthorContext,
	DocumentContext,
	NavigationContext,
	PageContext,
	TagContext,
} from "@/types";

import { buildTagPage } from "@/helpers/buildPage";
import { buildTree } from "@/helpers/buildTree";

import website from "@/config";

export type Props = {
	author?: AuthorContext;
	documents: DocumentContext[];
	navigation: NavigationContext;
	page: PageContext;
	tag: TagContext;
	website: typeof website;
};

export const getStaticPaths = async () => {
	const documents = await getCollection(DOCUMENTS_COLLECTION_NAME);
	const tags = await getCollection(TAGS_COLLECTION_NAME);

	const tree = buildTree(documents);

	const allTags: {
		id: string;
		name: string;
	}[] = documents.flatMap(d => ([
		...(d.data.links.filter(l => l.type === 'tag' && l.id).map(l => ({
			id: l.id,
			name: l.title,
		})) ?? []),
		...(d.data.tags?.map(t => ({
			id: t,
			name: t,
		})) ?? []),
	]));

	return [...new Set(allTags)].map(entry => {
		const tag = tags.find(t => t.id === entry.id) ?? {
			collection: 'tags',
			id: entry.id,
			data: {
				name: entry.name
			}
		};

		const taggedDocuments = documents.filter(d => d.data.tags?.includes(tag.id) || d.data.links.some(l => l.type === 'tag' && l.id === tag.id))

		return ({
			params: {
				tag: tag.id,
			},
			props: {
				tag,
				documents: taggedDocuments,
				navigation: {
					tree,
					backlinks: [],
				},
				page: buildTagPage(tag),
				website,
			} satisfies Props,
		})
	});

}

