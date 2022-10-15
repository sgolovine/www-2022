import { getMap } from "./getMap.node"

type Args = Partial<{
  snippet: boolean
}>

export async function getStaticPostPaths(args?: Args) {
  const contentMap = await getMap()

  let posts = args?.snippet ? contentMap.snippets : contentMap.posts

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.postMetadata.slug,
      },
    })),
  }
}
