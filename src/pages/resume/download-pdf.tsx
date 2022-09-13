import { PageLayout } from "~/components/layout"
import labels from "~/labels.json"
import { AppPage } from "~/model/PageProps"
import { DownloadPdfPage, pageNavigationConfig } from "~/features/resume"

const Page: AppPage = () => {
  return <DownloadPdfPage />
}

Page.getLayout = page => {
  return (
    <PageLayout
      header={{
        title: labels.resume.downloadPDF,
        pageNavigation: pageNavigationConfig,
      }}
    >
      {page}
    </PageLayout>
  )
}

export default Page
