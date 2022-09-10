import { getAllPosts } from "./getAllPosts.node"
import uniq from "lodash.uniq"

export const getAllCategories = async (): Promise<string[]> => {
  const allPosts = await getAllPosts()

  const allCategories = allPosts?.data
    .map(post => post.postMetadata.category)
    .filter(item => typeof item !== "undefined") as string[] | undefined

  return uniq(allCategories) ?? []
}
