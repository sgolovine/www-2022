import fs from "fs"
import matter from "gray-matter"
import path from "path"
import glob from "glob"
import AppLogger from "../logger"
import {
  BlogPostMetadata,
  PostMetadataBase,
  ContentMap,
  ContentMapData,
} from "~/model/Post"
import uniq from "lodash.uniq"
import sizeOf from "image-size"

// If set to true, will print the map rather than writing it
// To the disk
const RUN_DRY = false

// For post previews we take the first X number of characters
// Of the post. This variable defines how many characters we take.
const PREVIEW_LENGTH = 160

const logger = new AppLogger({
  prefix: "POST MAPPER",
})

const headerImageSizes = [480, 640, 750, 828, 1080, 1200, 2048, 3840]

const postsDir = path.resolve(process.cwd(), "content", "posts")
const snippetsDir = path.resolve(process.cwd(), "content", "snippets")
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
): ContentMapData<PostType>[] {
  logger.info(`Fetching posts in directory: ${cwd}`)
  return files.map(file => {
    const fullPath = path.resolve(cwd, file)
    const postFile = fs.readFileSync(fullPath, "utf-8")
    const postMatter = matter(postFile)

    let socialImages: {
      path: string
      relativePath: string
      height: number
      width: number
      type: string
    }[] = []

    const headerImage = (postMatter as any)?.data?.headerImage

    if (headerImage) {
      const filenameWithoutExtension = headerImage
        .replace(".jpeg", "")
        .replace(".jpg", "")
        .replace(".png", "")

      socialImages = headerImageSizes.map(size => {
        const imgFilepath = path.resolve(
          process.cwd(),
          "public",
          "images",
          "posts",
          "nextImageExportOptimizer",
          `${filenameWithoutExtension}-opt-${size}.WEBP`
        )
        const relativePath = path.join(
          "images",
          "posts",
          "nextImageExportOptimizer",
          `${filenameWithoutExtension}-opt-${size}.WEBP`
        )

        const dimensions = sizeOf(imgFilepath)

        return {
          path: imgFilepath,
          relativePath,
          height: dimensions.height ?? 0,
          width: dimensions.width ?? 0,
          type: dimensions.type ?? "",
        }
      })
    }

    const getPostPreview = (content: string) =>
      content.substring(0, PREVIEW_LENGTH).replace("\n", "")

    return {
      relativePath: file,
      postMetadata: {
        ...postMatter.data,
        type: isSnippet ? "snippet" : "post",
        socialImages: isSnippet ? undefined : socialImages,
      } as PostType,
      postPreview: isSnippet ? undefined : getPostPreview(postMatter.content),
    }
  })
}

;(async function main() {
  logger.info(`building post map in mode`)

  try {
    // glob posts and snippets from directory
    const postFiles = await globAsync("**/*.md", postsDir)
    const snippetFiles = await globAsync("**/*.md", snippetsDir)

    const posts = fetchPosts<BlogPostMetadata>(postFiles, postsDir, false)

    const snippets = fetchPosts<PostMetadataBase>(
      snippetFiles,
      snippetsDir,
      true
    )

    const postCategories = uniq(
      posts
        .map(post => post.postMetadata.category)
        .filter(category => typeof category !== "undefined")
    ).map(category => ({
      value: category as string,
      label:
        (category as string)[0].toUpperCase() +
        (category as string).substring(1),
    }))

    const postTags: string[] = uniq(
      posts.reduce((acc, item) => {
        if (item.postMetadata.tags) {
          const splitTags = item.postMetadata.tags.split(",")
          return [...acc, ...splitTags]
        }
        return acc
      }, [] as string[])
    )

    const map: ContentMap = {
      posts,
      snippets,
      postCategories,
      postTags,
    }

    logger.info(`writing contents to ${outPath}`)
    try {
      if (RUN_DRY) {
        console.log(
          "-".repeat(10) +
            "\n" +
            JSON.stringify(map, null, 2) +
            "\n" +
            "-".repeat(10)
        )
        process.exit(0)
      } else {
        fs.writeFileSync(outPath, JSON.stringify(map, null, 2))
      }
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
