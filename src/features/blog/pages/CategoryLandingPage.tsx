import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import BlogItem from "../components/BlogItem"
import BlogListLayout from "../components/BlogListLayout"
import { CategoryLandingPageProps } from "../types/CategoryLandingPageProps"

const CategoryLandingPage: React.FC<CategoryLandingPageProps> = ({
  postsByCurrentCategory,
  currentCategory,
}) => {
  return (
    <PageContainer>
      <PageHeader>{currentCategory.label}</PageHeader>
      <BlogListLayout>
        {postsByCurrentCategory.map(post => {
          return (
            <BlogItem
              key={post.relativePath}
              meta={post.postMetadata}
              preview={post.postPreview}
            />
          )
        })}
      </BlogListLayout>
    </PageContainer>
  )
}

export default CategoryLandingPage
