import { PostMap, BlogPost } from "~/model/Post"

export interface AllPostsPageProps {
  posts: PostMap<BlogPost>
}
