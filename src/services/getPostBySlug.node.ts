import path from "path"
import fs from "fs/promises"
import AppLogger from "@logger"
import { ContentMap } from "~/model/Post"
import { serialize } from "next-mdx-remote/serialize"
import { SerializeOptions } from "next-mdx-remote/dist/types"
import rehypePrism from "@mapbox/rehype-prism"

const logger = new AppLogger({
  prefix: "Get Post By Slug",
})

const postMapPath = path.resolve(process.cwd(), "src", "__postmap__.json")

const serializeOptions: SerializeOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    rehypePlugins: [rehypePrism],
  },
}

export async function getPostBySlug(slug: string) {
  try {
    const postMapFile = await fs.readFile(postMapPath, "utf-8")
    const postMap: ContentMap = JSON.parse(postMapFile)
    const selectedPostMetadata = postMap?.posts?.data.find(
      postItem => postItem.postMetadata.slug === slug
    )
    if (selectedPostMetadata) {
      // fetch the MD file
      const rawBlogPost = await fs.readFile(
        path.resolve(postMap.posts.cwd, selectedPostMetadata.relativePath),
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
  try {
    const postMapFile = await fs.readFile(postMapPath, "utf-8")
    const postMap: ContentMap = JSON.parse(postMapFile)
    const selectedPostMetadata = postMap?.snippets?.data.find(
      postItem => postItem.postMetadata.slug === slug
    )
    if (selectedPostMetadata) {
      // fetch the MD file
      const rawBlogPost = await fs.readFile(
        path.resolve(postMap.snippets.cwd, selectedPostMetadata.relativePath),
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
