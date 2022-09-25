import { sortPostsByDate } from "~/features/blog/helpers/sortPostsByDate"
import { getMap } from "./getMap.node"

export async function getRecentPosts(
  excludeSlug?: string,
  numberOfPosts?: number
) {
  const mapFile = await getMap()

  const parsedForExclude = excludeSlug
    ? mapFile.posts.filter(item => item.postMetadata.slug !== excludeSlug)
    : mapFile.posts

  const sortedByDate = sortPostsByDate(parsedForExclude)

  return sortedByDate.slice(0, numberOfPosts ?? 5)
}
