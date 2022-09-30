import { useRouter } from "next/router"
import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import { ListItem } from "~/components/listItem"
import pageTitles from "~/config/navigation/pageTitles"
import { StaticRoutes } from "~/model/Routes"
import BlogListLayout from "../components/BlogListLayout"
import { SnippetsLandingPageProps } from "../types/SnippetsLandingPageProps"

const SnippetsLandingPage: React.FC<SnippetsLandingPageProps> = ({
  snippets,
}) => {
  const router = useRouter()

  return (
    <PageContainer>
      <PageHeader>{pageTitles[StaticRoutes.BlogSnippets]}</PageHeader>
      <BlogListLayout>
        {snippets.map(post => {
          return (
            <ListItem
              key={post.relativePath}
              title={post.postMetadata.title}
              description={post.postMetadata.description}
              onClick={() => router.push(`/snippet/${post.postMetadata.slug}`)}
            />
          )
        })}
      </BlogListLayout>
    </PageContainer>
  )
}

export default SnippetsLandingPage
