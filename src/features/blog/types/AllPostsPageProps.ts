import { ContentMapCategory, PostMap } from "~/model/Post"

export interface AllPostsProps {
  posts: PostMap
}

export interface AllPostsPageProps extends AllPostsProps {
  categories: ContentMapCategory[]
}
