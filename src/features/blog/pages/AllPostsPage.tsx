import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import BlogItem from "../components/BlogItem"
import BlogListLayout from "../components/BlogListLayout"
import { AllPostsProps } from "../types/AllPostsPageProps"

const AllPostsPage: React.FC<AllPostsProps> = ({ posts }) => {
  return (
    <PageContainer>
      <PageHeader>Posts</PageHeader>
      <BlogListLayout>
        {posts.map(post => {
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

export default AllPostsPage
