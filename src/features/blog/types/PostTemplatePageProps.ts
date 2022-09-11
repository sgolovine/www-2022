import { BlogPost, PostMapData } from "~/model/Post"

export interface PostTemplatePageProps {
  meta: BlogPost
  mdx: string
  recentPosts: PostMapData<BlogPost>[]
}
