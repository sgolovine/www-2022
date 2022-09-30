import { useRouter } from "next/router"
import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import { ListItem } from "~/components/listItem"
import BlogListLayout from "../components/BlogListLayout"
import { CategoryLandingPageProps } from "../types/CategoryLandingPageProps"

const CategoryLandingPage: React.FC<CategoryLandingPageProps> = ({
  postsByCurrentCategory,
  currentCategory,
}) => {
  const router = useRouter()
  return (
    <PageContainer>
      <PageHeader>{currentCategory.label}</PageHeader>
      <BlogListLayout>
        {postsByCurrentCategory.map(post => {
          return (
            <ListItem
              key={post.relativePath}
              title={post.postMetadata.title}
              date={post.postMetadata.date}
              description={post.postMetadata.description}
              preview={post.postPreview}
              category={post.postMetadata.category}
              onClick={() => router.push(`/post/${post.postMetadata.slug}`)}
            />
          )
        })}
      </BlogListLayout>
    </PageContainer>
  )
}

export default CategoryLandingPage
