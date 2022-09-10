import { PostMap, BlogPost } from "~/model/Post"

export interface CategoryPageProps {
  posts: PostMap<BlogPost>
  headerLabel: string
}
