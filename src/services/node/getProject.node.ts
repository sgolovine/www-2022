/** Given a filename (`someProject.json`)
 * Will return that file from `content/projects/someProject.json`
 */
import fs from "fs/promises"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"
import { Project } from "~/features/projects/model/Project"
import { projectsDir, projectsPath } from "../constants"

export const getProject = async <T>(
  configPath: string,
  projectId: string,
  introPath?: string
): Promise<T> => {
  let configFile
  let allProjectsFile: Project[]
  let mdx: string | null = null
  const fullPath = path.resolve(projectsDir, configPath)

  // Get the configuration file for the project
  // As well as the global config file for all projects.
  try {
    configFile = JSON.parse(await fs.readFile(fullPath, "utf-8"))
    allProjectsFile = JSON.parse(await fs.readFile(projectsPath, "utf-8"))
  } catch (e) {
    throw "Error: File Not Found"
  }

  // Find teh current project in the all projects file.
  const currentProject = allProjectsFile.find(item => item.id === projectId)

  if (introPath) {
    const introMd = await fs.readFile(
      path.resolve(projectsDir, introPath),
      "utf-8"
    )
    const mdxSource = await serialize(introMd, {
      parseFrontmatter: true,
    })
    mdx = mdxSource.compiledSource
  }

  return {
    url: currentProject?.url,
    startDate: currentProject?.startDate,
    endDate: currentProject?.endDate,
    mdx: mdx,
    ...configFile,
  }
}
