import path from "path"
import fs from "fs/promises"
import { ContentMap } from "~/model/Post"

const postMapPath = path.resolve(process.cwd(), "src", "__postmap__.json")

export async function getRecentPosts(
  excludeSlug?: string,
  numberOfPosts?: number
) {
  const mapFile = await fs.readFile(postMapPath, "utf-8")
  const parsedMapFile: ContentMap = JSON.parse(mapFile)

  const parsedForExclude = excludeSlug
    ? parsedMapFile.posts.data.filter(
        item => item.postMetadata.slug !== excludeSlug
      )
    : parsedMapFile.posts.data

  const sortedByDate = parsedForExclude.sort((a, b) => {
    return -new Date(a.postMetadata.date) - -new Date(b.postMetadata.date)
  })

  return sortedByDate.slice(0, numberOfPosts ?? 5)
}
