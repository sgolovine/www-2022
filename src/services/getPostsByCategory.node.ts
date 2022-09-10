import { BlogPost, PostMap } from "~/model/Post"
import { getAllPosts } from "./getAllPosts.node"

export const getPostsByCategory = async (
  category: string
): Promise<PostMap<BlogPost>> => {
  const allPosts = await getAllPosts()
  if (allPosts) {
    const filteredPosts = allPosts.data.filter(post => {
      return post.postMetadata.category === category
    })
    return {
      cwd: allPosts.cwd,
      data: filteredPosts,
    }
  }
  return [] as unknown as PostMap<BlogPost>
}
