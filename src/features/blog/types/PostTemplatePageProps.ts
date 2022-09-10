import { BlogPost, Snippet } from "~/model/Post"

export interface PostTemplatePageProps {
  meta: BlogPost | Snippet
  mdx: string
}
