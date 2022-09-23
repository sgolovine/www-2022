import { BlogPost, PostMapData } from "~/model/Post"

export const sortPostsByDate = (posts: PostMapData<BlogPost>[]) => {
  return posts.sort((a, b) => {
    return -new Date(a.postMetadata.date) - -new Date(b.postMetadata.date)
  })
}
