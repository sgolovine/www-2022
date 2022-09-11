import fs from "fs/promises"
import path from "path"
import { ContentMap } from "~/model/Post"

const postMapPath = path.resolve(process.cwd(), "src", "__postmap__.json")

type Args = Partial<{
  snippet: boolean
}>

export async function getStaticPostPaths(args?: Args) {
  const postFile = await fs.readFile(postMapPath, "utf-8")
  const postMap: ContentMap = JSON.parse(postFile)

  let posts = args?.snippet ? postMap.snippets : postMap.posts

  return {
    paths: posts.data.map(post => ({
      params: {
        slug: post.postMetadata.slug,
      },
    })),
  }
}
