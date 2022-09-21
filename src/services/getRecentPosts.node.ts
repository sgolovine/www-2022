import { getMap } from "./getMap.node"

export async function getRecentPosts(
  excludeSlug?: string,
  numberOfPosts?: number
) {
  const mapFile = await getMap()

  const parsedForExclude = excludeSlug
    ? mapFile.posts.data.filter(item => item.postMetadata.slug !== excludeSlug)
    : mapFile.posts.data

  const sortedByDate = parsedForExclude.sort((a, b) => {
    return -new Date(a.postMetadata.date) - -new Date(b.postMetadata.date)
  })

  return sortedByDate.slice(0, numberOfPosts ?? 5)
}
