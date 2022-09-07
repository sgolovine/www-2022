import BlogItem from "./components/BlogItem"
import BlogListLayout from "./components/BlogListLayout"
import { BlogPageProps } from "./types/BlogPageProps"

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
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

export default BlogPage
