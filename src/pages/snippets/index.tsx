import { BaseLayout } from "~/components/layout"
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
Page.getLayout = page => <BaseLayout>{page}</BaseLayout>

export default Page
