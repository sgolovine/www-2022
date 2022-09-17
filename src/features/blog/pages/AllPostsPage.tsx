import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import BlogItem from "../components/BlogItem"
import BlogListLayout from "../components/BlogListLayout"
import { AllPostsPageProps } from "../types/AllPostsPageProps"

const AllPostsPage: React.FC<AllPostsPageProps> = ({ posts }) => {
  return (
    <BlogListLayout>
      {posts.data.map(post => {
        return (
          <BlogItem
            key={post.relativePath}
            meta={post.postMetadata}
            preview={post.postPreview}
          />
        )
      })}
    </BlogListLayout>
  )
}

export default AllPostsPage
