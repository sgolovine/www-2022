import { PageLayout } from "~/components/layout"
import { AppPage, StaticProps } from "~/model/PageProps"
import { SnippetsLandingPage, SnippetsLandingPageProps } from "~/features/blog"
import { getMap } from "~/services/node/getMap.node"
import { PageSEO } from "~/components/common/PageSEO"
import labels from "~/labels.json"

const Page: AppPage<SnippetsLandingPageProps> = props => {
  return <SnippetsLandingPage {...props} />
}

Page.getLayout = page => (
  <>
    <PageSEO
      title={`${labels.seo.defaultTitle} | ${labels.pageTitles.snippets}`}
      description={labels.seo.defaultDescription}
    />
    <PageLayout>{page}</PageLayout>
  </>
)

export async function getStaticProps(): StaticProps<SnippetsLandingPageProps> {
  const postMap = await getMap()
  return {
    props: {
      snippets: postMap.snippets,
    },
  }
}
export default Page
