import path from "path"
import fs from "fs/promises"
import { Resume } from "~/features/resume/types/Resume"

export async function getResume(): Promise<Resume> {
  const resumePath = path.resolve(
    process.cwd(),
    "public",
    "resume",
    "resume.json"
  )
  try {
    const resumeFile = await fs.readFile(resumePath, "utf-8")
    const resumeJSON: Resume = JSON.parse(resumeFile)
    return resumeJSON
  } catch (e) {
    throw e
  }
}
