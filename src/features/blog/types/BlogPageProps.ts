import { PostMap, BlogPost } from "~/model/Post"

export interface BlogPageProps {
  posts: PostMap<BlogPost>
}
