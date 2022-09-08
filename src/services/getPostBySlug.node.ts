import path from "path"
import fs from "fs/promises"
import AppLogger from "@logger"
import { ContentMap } from "~/model/Post"

const logger = new AppLogger({
  prefix: "Get Post By Slug",
})

const postMapPath = path.resolve(process.cwd(), "src", "__postmap__.json")

export async function getPostBySlug(slug: string) {
  try {
    const postMapFile = await fs.readFile(postMapPath, "utf-8")
    const postMap: ContentMap = JSON.parse(postMapFile)
    const selectedPost = postMap?.posts?.data.find(
      postItem => postItem.postMetadata.slug === slug
    )
    if (selectedPost) {
      return selectedPost
    }
  } catch (e) {
    logger.error("Error fetching post.", "Unable to read postmap.")
    throw e
  }
}
