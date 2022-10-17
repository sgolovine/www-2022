import { projectsPath } from "../constants"
import fs from "fs/promises"
import AppLogger from "@logger"
import { Project } from "~/features/projects/model/Project"

const logger = new AppLogger({
  prefix: "Get Projects",
})

export async function getProjects(): Promise<Project[]> {
  logger.log("fetching projects")
  try {
    const projects = await fs.readFile(projectsPath, "utf-8")
    const projectsJSON: Project[] = JSON.parse(projects)
    if (projectsJSON) {
      logger.log("successfully fetched projects json")
      const enabledProjects = projectsJSON.filter(project => !project.hide)
      return enabledProjects
    } else {
      logger.log("projects json not found")
      return []
    }
  } catch (e) {
    logger.error("error fetching projects", e)
    return []
  }
}
