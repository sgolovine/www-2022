import { PageLayout } from "~/components/layout"
import { WorkPage } from "~/features/work"
import { AppPage } from "~/model/PageProps"
import { PageSEO } from "~/components/common/PageSEO"
import labels from "~/labels.json"

const Page: AppPage = () => {
  return <WorkPage />
}
Page.getLayout = page => (
  <>
    <PageSEO
      title={`${labels.seo.defaultTitle} | ${labels.pageTitles.work}`}
      description={labels.seo.defaultDescription}
    />
    <PageLayout>{page}</PageLayout>
  </>
)

export default Page
