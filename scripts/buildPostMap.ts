import fs from "fs"
import matter from "gray-matter"
import path from "path"
import glob from "glob"
import AppLogger from "../logger"
import { BlogPost, ContentMap, Snippet } from "~/model/Post"

// For post previews we take the first X number of characters
// Of the post. This variable defines how many characters we take.
const PREVIEW_LENGTH = 160

const logger = new AppLogger({
  prefix: "POST MAPPER",
})

const postDir = path.resolve(process.cwd(), "public", "posts")
const snippetsDir = path.resolve(process.cwd(), "public", "snippets")
const outPath = path.resolve(process.cwd(), "src", "__postmap__.json")

async function globAsync(pattern: string, cwd: string): Promise<string[]> {
  logger.log(`globbing pattern ${pattern}`, `glob directory: ${cwd}`)
  return new Promise((resolve, reject) => {
    glob(pattern, { cwd }, (error, files) => {
      if (error) {
        reject(error)
      }
      resolve(files)
    })
  })
}

function fetchPosts<PostType>(
  files: string[],
  cwd: string,
  isSnippet: boolean
) {
  logger.info(`Fetching posts in directory: ${cwd}`)
  return files.map(file => {
    const fullPath = path.resolve(cwd, file)
    const postFile = fs.readFileSync(fullPath, "utf-8")
    const postMatter = matter(postFile)

    const getPostPreview = (content: string) =>
      content.substring(0, PREVIEW_LENGTH).replace("\n", "")

    return {
      relativePath: file,
      postMetadata: {
        ...postMatter.data,
        type: isSnippet ? "snippet" : "post",
      } as PostType,
      postPreview: isSnippet ? undefined : getPostPreview(postMatter.content),
    }
  })
}

;(async function main() {
  logger.info("building post map")
  try {
    // glob posts and snippets from directory
    const postFiles = await globAsync("**/*.md", postDir)
    const snippetFiles = await globAsync("**/*.md", snippetsDir)

    const allPosts = fetchPosts<BlogPost>(postFiles, postDir, false)
    const allSnippets = fetchPosts<Snippet>(snippetFiles, snippetsDir, true)

    const map: ContentMap = {
      posts: {
        cwd: postDir,
        data: allPosts,
      },
      snippets: {
        cwd: snippetsDir,
        data: allSnippets,
      },
    }

    logger.info(`writing contents to ${outPath}`)
    try {
      fs.writeFileSync(outPath, JSON.stringify(map, null, 2))
    } catch (e) {
      logger.error(`error writing file`, e)
      throw e
    } finally {
      logger.info(`successfully wrote the file`)
      process.exit(0)
    }
  } catch (e) {
    logger.error(`error building post map`, e)
  }
})()
