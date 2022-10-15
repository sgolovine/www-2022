import path from "path"
import fs from "fs/promises"
import AppLogger from "@logger"
import { serialize } from "next-mdx-remote/serialize"
import { SerializeOptions } from "next-mdx-remote/dist/types"
import rehypePrism from "@mapbox/rehype-prism"
import { getMap } from "./getMap.node"
import { postsDir, snippetsDir } from "../constants"

const logger = new AppLogger({
  prefix: "Get Post By Slug",
})

const serializeOptions: SerializeOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    rehypePlugins: [rehypePrism],
  },
}

export async function getPostBySlug(slug: string) {
  const mapFile = await getMap()
  try {
    const selectedPostMetadata = mapFile?.posts?.find(
      postItem => postItem.postMetadata.slug === slug
    )
    if (selectedPostMetadata) {
      // fetch the MD file
      const rawBlogPost = await fs.readFile(
        path.resolve(postsDir, selectedPostMetadata.relativePath),
        "utf-8"
      )

      const mdxSource = await serialize(rawBlogPost, serializeOptions)

      return {
        meta: selectedPostMetadata,
        mdx: mdxSource.compiledSource,
      }
    }
  } catch (e) {
    logger.error("Error fetching post.", "Unable to read postmap.")
    throw e
  }
}

export async function getSnippetBySlug(slug: string) {
  const mapFile = await getMap()
  try {
    const selectedPostMetadata = mapFile?.snippets?.find(
      postItem => postItem.postMetadata.slug === slug
    )
    if (selectedPostMetadata) {
      // fetch the MD file
      const rawBlogPost = await fs.readFile(
        path.resolve(snippetsDir, selectedPostMetadata.relativePath),
        "utf-8"
      )

      const mdxSource = await serialize(rawBlogPost, serializeOptions)

      return {
        meta: selectedPostMetadata,
        mdx: mdxSource.compiledSource,
      }
    }
  } catch (e) {
    logger.error("Error fetching snippets.", "Unable to read postmap.")
    throw e
  }
}
