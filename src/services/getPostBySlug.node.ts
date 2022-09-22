import path from "path"
import fs from "fs/promises"
import AppLogger from "@logger"
import { serialize } from "next-mdx-remote/serialize"
import { SerializeOptions } from "next-mdx-remote/dist/types"
import rehypePrism from "@mapbox/rehype-prism"
import { getMap } from "./getMap.node"

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
    const selectedPostMetadata = mapFile?.posts?.data.find(
      postItem => postItem.postMetadata.slug === slug
    )
    if (selectedPostMetadata) {
      // fetch the MD file
      const rawBlogPost = await fs.readFile(
        path.resolve(mapFile.posts.cwd, selectedPostMetadata.relativePath),
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
    const selectedPostMetadata = mapFile?.snippets?.data.find(
      postItem => postItem.postMetadata.slug === slug
    )
    if (selectedPostMetadata) {
      // fetch the MD file
      const rawBlogPost = await fs.readFile(
        path.resolve(mapFile.snippets.cwd, selectedPostMetadata.relativePath),
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
