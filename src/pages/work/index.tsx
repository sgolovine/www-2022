import { PageLayout } from "~/components/layout"
import { featureFlags } from "~/config/featureFlags"
import { featureStubs } from "~/config/featureStubs"
import { WorkPage } from "~/features/work"
import { useFeatureRedirect } from "~/hooks/useFeatureRedirect"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => {
  useFeatureRedirect({
    url: featureStubs.work,
    flag: featureFlags.nativeWorkPage,
  })

  return <WorkPage />
}
Page.getLayout = page => (
  <PageLayout header={{ title: "Work" }}>{page}</PageLayout>
)

export default Page
