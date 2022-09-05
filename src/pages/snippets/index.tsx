import { PageLayout } from "~/components/layout"
import { featureFlags } from "~/config/featureFlags"
import { featureStubs } from "~/config/featureStubs"
import { SnippetsPage } from "~/features/snippets"
import { useFeatureRedirect } from "~/hooks/useFeatureRedirect"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => {
  useFeatureRedirect({
    url: featureStubs.snippets,
    flag: featureFlags.nativeSnippetsPage,
  })

  return <SnippetsPage />
}
Page.getLayout = page => (
  <PageLayout header={{ title: "Snippets" }}>{page}</PageLayout>
)

export default Page
