import type { CollectionEntry } from "astro:content";

import type { Node } from '@/types';

const getNodeOrder = (node: Node<CollectionEntry<'documents'>>) => {
  const isFolder = node.children?.length;

  if (!isFolder) {
    return node.data?.data.order;
  }

  const lastUrlPart = node.permalink.split("/").at(-1);

  const childIndex = node.children?.find((c) => {
    const cLastUrlPart = c.permalink.split("/").at(-1);
    return cLastUrlPart === lastUrlPart;
  });

  return childIndex?.data?.data.order;
}

// recursively sort the tree based on: data.order (numeric desc) or node.name (alphabetical asc)
const sortFn = (a: Node<CollectionEntry<'documents'>>, b: Node<CollectionEntry<'documents'>>) => {
  const aOrder = getNodeOrder(a);
  const bOrder = getNodeOrder(b);

  if (typeof aOrder === 'number' && typeof bOrder !== 'number') {
    return -1;
  }
  if (typeof aOrder !== 'number' && typeof bOrder === 'number') {
    return 1;
  }
  if (typeof aOrder === 'number' && typeof bOrder === 'number') {
    return aOrder - bOrder;
  }
  return a.name.localeCompare(b.name);
}

function sortTree(node: Node<CollectionEntry<'documents'>>) {
  node.children?.sort(sortFn);
  for (const child of node.children ?? []) {
    sortTree(child);
  }
}

export function buildTree(data: CollectionEntry<'documents'>[]): Node<CollectionEntry<'documents'>>[] {
  const root: Node<CollectionEntry<'documents'>>[] = [];

  for (const item of data) {
    if (item.data.publish === false) {
      continue;
    }

    const parts = item.data.permalink.replace(import.meta.env.BASE_URL, '').split('/').filter((p, i) => p !== '');
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      let existingNode = currentLevel.find(node => node.name === part.replaceAll('-', ' '));

      if (!existingNode) {
        existingNode = {
          name: part.replaceAll('-', ' '),
          permalink: `${import.meta.env.BASE_URL}/${parts.slice(0, i + 1).join('/')}`.replace('//', '/'),
          children: []
        };
        currentLevel.push(existingNode);
      }

      if (i === parts.length - 1) {
        existingNode.name = item.data.title;
        existingNode.permalink = item.data.permalink.replace('//', '/');
        existingNode.data = item;
      }

      currentLevel = existingNode.children;
    }
  }

  root.sort(sortFn);
  for (const node of root) {
    sortTree(node);
  }

  return root
}