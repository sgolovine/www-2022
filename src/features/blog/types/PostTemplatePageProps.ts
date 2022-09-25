import { BlogPostMetadata, PostMap } from "~/model/Post"

export interface PostTemplatePageProps {
  meta: BlogPostMetadata
  mdx: string
  recentPosts: PostMap
}
