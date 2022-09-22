import { getMap } from "./getMap.node"

type Args = Partial<{
  snippet: boolean
}>

export async function getStaticPostPaths(args?: Args) {
  const postMap = await getMap()

  let posts = args?.snippet ? postMap.snippets : postMap.posts

  return {
    paths: posts.data.map(post => ({
      params: {
        slug: post.postMetadata.slug,
      },
    })),
  }
}
