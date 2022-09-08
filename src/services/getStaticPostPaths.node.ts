import fs from "fs/promises"
import path from "path"
import { ContentMap } from "~/model/Post"

const postMapPath = path.resolve(process.cwd(), "src", "__postmap__.json")

export async function getStaticPostPaths() {
  const postFile = await fs.readFile(postMapPath, "utf-8")
  const postMap: ContentMap = JSON.parse(postFile)

  return {
    paths: postMap.posts.data.map(post => ({
      params: {
        slug: post.postMetadata.slug,
      },
    })),
  }
}
