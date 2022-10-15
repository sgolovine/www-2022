/** Given a filename (`someProject.json`)
 * Will return that file from `content/projects/someProject.json`
 */
import fs from "fs/promises"
import path from "path"
import { projectsDir } from "../constants"

export const getProject = async <T>(relativePath: string): Promise<T> => {
  const fullPath = path.resolve(projectsDir, relativePath)
  try {
    const file = await fs.readFile(fullPath, "utf-8")
    try {
      const json: T = JSON.parse(file)
      return json
    } catch (e) {
      throw "Error Parsing JSON File."
    }
  } catch (e) {
    throw "Error: File Not Found"
  }
}
