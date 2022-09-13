import { PageLayout } from "~/components/layout"
import labels from "~/labels.json"
import { AppPage } from "~/model/PageProps"
import { pageNavigationConfig } from "~/features/resume"

const Page: AppPage = () => {
  return <p>Download DOC Page</p>
}

Page.getLayout = page => {
  return (
    <PageLayout
      header={{
        title: labels.resume.downloadDOC,
        pageNavigation: pageNavigationConfig,
      }}
    >
      {page}
    </PageLayout>
  )
}

export default Page
