import { PageLayout } from "~/components/layout"
import BlogItem from "../components/BlogItem"
import BlogListLayout from "../components/BlogListLayout"
import { pageNavigationConfig } from "../config/pageNavigation"
import { CategoryPageProps } from "../types/CategoryPageProps"

const CategoryPage: React.FC<CategoryPageProps> = ({ headerLabel, posts }) => (
  <PageLayout>
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
  </PageLayout>
)

export default CategoryPage
