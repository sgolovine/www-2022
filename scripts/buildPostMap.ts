import fs from "fs"
import matter from "gray-matter"
import path from "path"
import glob from "glob"
import AppLogger from "../logger"
import { BlogPost, ContentMap, Snippet } from "~/model/Post"
import uniq from "lodash.uniq"

// For post previews we take the first X number of characters
// Of the post. This variable defines how many characters we take.
const PREVIEW_LENGTH = 160

const logger = new AppLogger({
  prefix: "POST MAPPER",
})

const devPostDir = path.resolve(
  process.cwd(),
  "public",
  "mock_content",
  "posts"
)
const devSnippetsDir = path.resolve(
  process.cwd(),
  "public",
  "mock_content",
  "snippets"
)

const prodPostsDir = path.resolve(process.cwd(), "public", "posts")
const prodSnippetsDir = path.resolve(process.cwd(), "public", "snippets")
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
  const isDev = process.argv[2].replace("--", "") === "dev"

  logger.info(`building post map in mode`)
  logger.info(`Development Mode: ${isDev}`)

  const postsDir = isDev ? devPostDir : prodPostsDir
  const snippetsDir = isDev ? devSnippetsDir : prodSnippetsDir

  try {
    // glob posts and snippets from directory
    const postFiles = await globAsync("**/*.md", postsDir)
    const snippetFiles = await globAsync("**/*.md", snippetsDir)

    const allPosts = fetchPosts<BlogPost>(postFiles, postsDir, false)
    const allSnippets = fetchPosts<Snippet>(snippetFiles, snippetsDir, true)

    const postCategories = uniq(
      allPosts
        .map(post => post.postMetadata.category)
        .filter(category => typeof category !== "undefined")
    ).map(category => ({
      value: category as string,
      label:
        (category as string)[0].toUpperCase() +
        (category as string).substring(1),
    }))

    const postTags = uniq(
      allPosts.reduce((acc, item) => {
        if (item.postMetadata.tags) {
          const splitTags = item.postMetadata.tags.split(",")
          return [...acc, ...splitTags]
        }
        return acc
      }, [] as string[])
    )

    const map: ContentMap = {
      posts: {
        cwd: postsDir,
        data: allPosts,
        categories: postCategories ?? [],
        tags: postTags ?? [],
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
