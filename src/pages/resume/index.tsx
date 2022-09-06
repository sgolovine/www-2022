import { PageLayout } from "~/components/layout"
import { featureFlags } from "~/config/featureFlags"
import { featureStubs } from "~/config/featureStubs"
import { ResumePage } from "~/features/resume"
import { useFeatureRedirect } from "~/hooks/useFeatureRedirect"
import { AppPage } from "~/model/PageProps"
import labels from "~/labels.json"

const Page: AppPage = () => {
  useFeatureRedirect({
    url: featureStubs.resume,
    flag: featureFlags.nativeResumePage,
  })

  return <ResumePage />
}
Page.getLayout = page => (
  <PageLayout
    header={{
      title: labels.headerRoutes.resume,
      pageNavigation: [
        { id: "download-pdf", title: labels.resume.downloadPDF, href: "#" },
        { id: "download-doc", title: labels.resume.downloadDOC, href: "#" },
      ],
    }}
  >
    {page}
  </PageLayout>
)

export default Page
