import type { APIRoute } from "astro";

import { getStaticPaths } from "@/components/Article/utils/get-static-paths";
import { getKnowledgeGraph } from "@/helpers/getKnowledgeGraph";

export const GET: APIRoute = async ({ params }) => {
  const data = await getKnowledgeGraph(params.slug);

  return new Response(
    JSON.stringify(data),
  );
}

export { getStaticPaths };