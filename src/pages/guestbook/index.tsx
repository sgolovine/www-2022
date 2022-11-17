import { PageSEO } from "~/components/common/PageSEO"
import { PageLayout } from "~/components/layout"
import { GuestbookPage } from "~/features/guestbook"
import { AppPage } from "~/model/PageProps"
import labels from "~/labels.json"

const Page: AppPage = props => <GuestbookPage {...props} />

Page.getLayout = page => (
  <>
    <PageSEO
      title={`${labels.seo.defaultTitle} | ${labels.pageTitles.guestbook}`}
      description={labels.seo.defaultDescription}
    />
    <PageLayout>{page}</PageLayout>
  </>
)

export default Page
