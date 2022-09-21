import { BlogPost, PostMap } from "~/model/Post"
import { getMap } from "./getMap.node"

export const getPostsByCategory = async (
  category: string
): Promise<PostMap<BlogPost>> => {
  const postMap = await getMap()
  if (postMap.posts) {
    const filteredPosts = postMap.posts.data.filter(post => {
      return post.postMetadata.category === category
    })
    return {
      cwd: postMap.posts.cwd,
      data: filteredPosts,
    }
  }
  return [] as unknown as PostMap<BlogPost>
}
