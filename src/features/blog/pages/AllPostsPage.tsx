import { useRouter } from "next/router"
import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import { ListItem } from "~/components/listItem"
import BlogListLayout from "../components/BlogListLayout"
import { AllPostsProps } from "../types/AllPostsPageProps"
import labels from "~/labels.json"
import { themeClasses } from "~/config/themeClasses"

const AllPostsPage: React.FC<AllPostsProps> = ({ posts }) => {
  const router = useRouter()
  return (
    <PageContainer>
      <PageHeader>{labels.blog.allPosts}</PageHeader>
      <p className={themeClasses.textColor}>{labels.blog.intro}</p>
      <hr className="my-4" />
      <BlogListLayout>
        {posts.map(post => {
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

export default AllPostsPage
