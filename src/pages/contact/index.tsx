import { PageLayout } from "~/components/layout"
import { ContactPage, ContactPageProps } from "~/features/contact"
import { AppPage } from "~/model/PageProps"
import labels from "~/labels.json"
import { PageSEO } from "~/components/common/PageSEO"

const Page: AppPage<ContactPageProps> = props => {
  return <ContactPage {...props} />
}

Page.getLayout = page => (
  <>
    <PageSEO
      title={`${labels.seo.defaultTitle} | ${labels.pageTitles.contact}`}
      description={labels.seo.defaultDescription}
    />
    <PageLayout>{page}</PageLayout>
  </>
)

export default Page
