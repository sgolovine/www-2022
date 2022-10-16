/** Given a filename (`someProject.json`)
 * Will return that file from `content/projects/someProject.json`
 */
import fs from "fs/promises"
import path from "path"
import { Project } from "~/features/projects/model/Project"
import { projectsDir, projectsPath } from "../constants"

export const getProject = async <T>(
  relativePath: string,
  projectId: string
): Promise<T> => {
  const fullPath = path.resolve(projectsDir, relativePath)
  try {
    const file = await fs.readFile(fullPath, "utf-8")
    const allProjectFile = await fs.readFile(projectsPath, "utf-8")
    try {
      const json: T = JSON.parse(file)
      const allProjectsJson: Project[] = JSON.parse(allProjectFile)
      const currentProject = allProjectsJson.find(item => item.id === projectId)
      return {
        url: currentProject?.url,
        startDate: currentProject?.startDate,
        endDate: currentProject?.endDate,
        ...json,
      }
    } catch (e) {
      throw "Error Parsing JSON File."
    }
  } catch (e) {
    throw "Error: File Not Found"
  }
}
