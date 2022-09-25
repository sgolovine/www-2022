import { PostMap } from "~/model/Post"

export const sortPostsByDate = (posts: PostMap) => {
  return posts.sort((a, b) => {
    return -new Date(a.postMetadata.date) - -new Date(b.postMetadata.date)
  })
}
