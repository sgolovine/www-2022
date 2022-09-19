import { PageLayout } from "~/components/layout"
import { AppPage } from "~/model/PageProps"
import { DownloadPdfPage } from "~/features/resume"

const Page: AppPage = () => {
  return <DownloadPdfPage />
}

Page.getLayout = page => {
  return <PageLayout>{page}</PageLayout>
}

export default Page
