import { PageLayout } from "~/components/layout"
import { pageNavigationConfig } from "~/features/blog/config/pageNavigation"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import { SnippetsLandingPage, SnippetsLandingPageProps } from "~/features/blog"
import { getAllSnippets } from "~/services/getAllSnippets.node"

const Page: AppPage<SnippetsLandingPageProps> = props => {
  return <SnippetsLandingPage {...props} />
}

Page.getLayout = page => (
  <PageLayout
    header={{
      title: labels.headerRoutes.blog,
      pageNavigation: pageNavigationConfig,
    }}
  >
    {page}
  </PageLayout>
)

export async function getStaticProps(): StaticProps<SnippetsLandingPageProps> {
  const allSnippets = await getAllSnippets()
  return {
    props: {
      snippets: allSnippets,
    },
  }
}
export default Page
