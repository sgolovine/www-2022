import path from "path"

const contentDir = path.resolve(process.cwd(), "content")
const postsDir = path.resolve(contentDir, "posts")
const snippetsDir = path.resolve(contentDir, "snippets")
const projectsDir = path.resolve(contentDir, "projects")
const projectsPath = path.resolve(projectsDir, "projects.json")

// Export other files/folders here as needed

export { contentDir, postsDir, snippetsDir, projectsPath, projectsDir }
