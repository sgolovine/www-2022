import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import BlogItem from "../components/BlogItem"
import BlogListLayout from "../components/BlogListLayout"
import { AllPostsPageProps } from "../types/AllPostsPageProps"

const AllPostsPage: React.FC<AllPostsPageProps> = ({ posts }) => {
  return (
    <PageContainer>
      <PageHeader>Posts</PageHeader>
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
    </PageContainer>
  )
}

export default AllPostsPage
