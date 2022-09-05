import { BaseLayout } from "~/components/layout"
import { featureFlags } from "~/config/featureFlags"
import { featureStubs } from "~/config/featureStubs"
import { ResumePage } from "~/features/resume"
import { useFeatureRedirect } from "~/hooks/useFeatureRedirect"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => {
  useFeatureRedirect({
    url: featureStubs.resume,
    flag: featureFlags.nativeResumePage,
  })

  return <ResumePage />
}
Page.getLayout = page => <BaseLayout>{page}</BaseLayout>

export default Page
