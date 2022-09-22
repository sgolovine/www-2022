import { PageLayout } from "~/components/layout"
import { AppPage, StaticProps } from "~/model/PageProps"
import { SnippetsLandingPage, SnippetsLandingPageProps } from "~/features/blog"
import { getMap } from "~/services/getMap.node"

const Page: AppPage<SnippetsLandingPageProps> = props => {
  return <SnippetsLandingPage {...props} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export async function getStaticProps(): StaticProps<SnippetsLandingPageProps> {
  const postMap = await getMap()
  return {
    props: {
      snippets: postMap.snippets,
    },
  }
}
export default Page
