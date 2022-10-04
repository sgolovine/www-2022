import { AppPage } from "~/model/PageProps"
import { LandingPage } from "~/features/landing"
import { BaseLayout } from "~/components/layout"
import labels from "~/labels.json"
import { PageSEO } from "~/components/common/PageSEO"

const Page: AppPage = () => <LandingPage />

Page.getLayout = page => (
  <>
    <PageSEO
      title={labels.seo.defaultTitle}
      description={labels.seo.defaultDescription}
    />
    <BaseLayout>{page}</BaseLayout>
  </>
)

export default Page
