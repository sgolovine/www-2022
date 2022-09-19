import { PageLayout } from "~/components/layout"
import { AppPage, StaticProps } from "~/model/PageProps"
import { SnippetsLandingPage, SnippetsLandingPageProps } from "~/features/blog"
import { getAllSnippets } from "~/services/getAllSnippets.node"

const Page: AppPage<SnippetsLandingPageProps> = props => {
  return <SnippetsLandingPage {...props} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export async function getStaticProps(): StaticProps<SnippetsLandingPageProps> {
  const allSnippets = await getAllSnippets()
  return {
    props: {
      snippets: allSnippets,
    },
  }
}
export default Page
