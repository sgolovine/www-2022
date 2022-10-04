import { PageLayout } from "~/components/layout"
import { AppPage } from "~/model/PageProps"
import { DownloadPdfPage } from "~/features/resume"
import { PageSEO } from "~/components/common/PageSEO"
import labels from "~/labels.json"

const Page: AppPage = () => {
  return <DownloadPdfPage />
}

Page.getLayout = page => (
  <>
    <PageSEO
      title={`${labels.seo.defaultTitle} | ${labels.pageTitles.downloadPdf}`}
      description={labels.seo.defaultDescription}
    />
    <PageLayout>{page}</PageLayout>
  </>
)

export default Page
