import { BlogPost, ContentMap, PostMap } from "~/model/Post"

export const filterPostsByCategory = (
  category: string,
  contentMap: ContentMap
): PostMap<BlogPost> => {
  if (contentMap.posts) {
    const filteredPosts = contentMap.posts.data.filter(post => {
      return post.postMetadata.category === category
    })
    return {
      cwd: contentMap.posts.cwd,
      data: filteredPosts,
    }
  }
  return [] as unknown as PostMap<BlogPost>
}
