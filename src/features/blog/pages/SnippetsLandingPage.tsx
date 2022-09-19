import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import pageTitles from "~/config/navigation/pageTitles"
import { Routes } from "~/model/Routes"
import BlogListLayout from "../components/BlogListLayout"
import SnippetItem from "../components/SnippetItem"
import { SnippetsLandingPageProps } from "../types/SnippetsLandingPageProps"

const SnippetsLandingPage: React.FC<SnippetsLandingPageProps> = ({
  snippets,
}) => {
  return (
    <PageContainer>
      <PageHeader>{pageTitles[Routes.BlogSnippets]}</PageHeader>
      <BlogListLayout>
        {snippets.data.map(post => {
          return (
            <SnippetItem
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

export default SnippetsLandingPage
