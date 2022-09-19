import { PageLayout } from "~/components/layout"
import { AppPage } from "~/model/PageProps"
import { DownloadDocPage } from "~/features/resume"

const Page: AppPage = () => {
  return <DownloadDocPage />
}

Page.getLayout = page => {
  return <PageLayout>{page}</PageLayout>
}

export default Page
