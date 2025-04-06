import type { CollectionEntry } from "astro:content";

import type { Node } from '../types';

export function buildTree(data: CollectionEntry<'documents'>[]): Node<CollectionEntry<'documents'>>[] {
  const root: Node<CollectionEntry<'documents'>>[] = [];

  for (const item of data) {
    if (item.data.publish === false) {
      continue;
    }

    const parts = item.id.split('/');
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      let existingNode = currentLevel.find(node => node.name === part);

      if (!existingNode) {
        existingNode = { name: part, children: [] };
        currentLevel.push(existingNode);
      }

      if (i === parts.length - 1) {
        existingNode.name = item.data.title;
        existingNode.data = item;
      }

      currentLevel = existingNode.children!;
    }
  }

  return root
}