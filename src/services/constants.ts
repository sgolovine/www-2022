import path from "path"

const contentDir = path.resolve(process.cwd(), "content")
const postsDir = path.resolve(contentDir, "posts")
const snippetsDir = path.resolve(contentDir, "snippets")
const projectsPath = path.resolve(contentDir, "projects", "projects.json")

// Export other files/folders here as needed

export { contentDir, postsDir, snippetsDir, projectsPath }
