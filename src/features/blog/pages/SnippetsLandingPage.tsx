import BlogListLayout from "../components/BlogListLayout"
import SnippetItem from "../components/SnippetItem"
import { SnippetsLandingPageProps } from "../types/SnippetsLandingPageProps"

const SnippetsLandingPage: React.FC<SnippetsLandingPageProps> = ({
  snippets,
}) => {
  return (
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
  )
}

export default SnippetsLandingPage
