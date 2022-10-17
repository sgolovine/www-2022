import path from "path"
import fs from "fs/promises"
import AppLogger from "@logger"

const logger = new AppLogger({
  prefix: "Version",
})

const versionPath = path.resolve(process.cwd(), "src", "__version__.json")

export const getVersion = async () => {
  logger.info("getting version")
  try {
    const versionFile = await fs.readFile(versionPath, "utf-8")
    try {
      const versionJSON = JSON.parse(versionFile)
      logger.info("successfully fetched versionJSON")
      return {
        version: versionJSON.version,
        commit: versionJSON.commit,
      }
    } catch (e) {
      logger.error("error parsing version json file.", e)
      throw e
    }
  } catch (e) {
    logger.error("error fetching version file", e)
    throw e
  }
}
