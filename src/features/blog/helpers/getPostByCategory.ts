import { ContentMap, PostMap } from "~/model/Post"

export const filterPostsByCategory = (
  category: string,
  contentMap: ContentMap
): PostMap => {
  if (contentMap.posts) {
    const filteredPosts = contentMap.posts.filter(post => {
      return post.postMetadata.category === category
    })
    return filteredPosts
  }
  return [] as unknown as PostMap
}
