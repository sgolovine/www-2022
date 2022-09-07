import path from "path"
import fs from "fs/promises"
import AppLogger from "@logger"
import { ContentMap } from "~/model/Post"

const logger = new AppLogger({
  prefix: "Get All Posts",
})

const postMap = path.resolve(process.cwd(), "src", "__postmap__.json")

export async function getAllPosts() {
  const mapFile = await fs.readFile(postMap, "utf-8")
  try {
    logger.info("parsing post map")
    const mapJSON: ContentMap = JSON.parse(mapFile)
    return mapJSON.posts
  } catch (e) {
    logger.error("error parsing post map")
  }
}
