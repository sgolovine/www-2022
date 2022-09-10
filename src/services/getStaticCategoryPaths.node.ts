import { getAllPosts } from "./getAllPosts.node"

export async function getStaticCategoryPaths() {
  const allPosts = await getAllPosts()

  return {
    paths: allPosts?.data.map(post => ({
      params: {
        category: post.postMetadata.category,
      },
    })),
  }
}
