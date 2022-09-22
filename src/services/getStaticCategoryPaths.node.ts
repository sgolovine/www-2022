import { getMap } from "./getMap.node"

export async function getStaticCategoryPaths() {
  const allPosts = await getMap()

  return {
    paths: allPosts.posts.categories.map(category => ({
      params: {
        category: category.value,
      },
    })),
    fallback: false,
  }
}
