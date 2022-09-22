// Gets __postmap__.json
import path from "path"
import AppLogger from "@logger"
import fs from "fs/promises"
import { ContentMap } from "~/model/Post"

const logger = new AppLogger({
  prefix: "Get Map",
})

const postMapPath = path.resolve(process.cwd(), "src", "__postmap__.json")

export async function getMap() {
  try {
    // Fetch Post Map
    logger.info("fetching post map")
    const mapFile = await fs.readFile(postMapPath, "utf-8")
    try {
      // Parse Post Map
      logger.info("parsing post map")
      const map: ContentMap = JSON.parse(mapFile)
      return map
    } catch (e) {
      logger.error("error parsing post map")
      throw e
    }
  } catch (e) {
    logger.error("error fetching post map")
    throw e
  }
}
