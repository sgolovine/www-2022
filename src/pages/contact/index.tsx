import { PageLayout } from "~/components/layout"
import { ContactPage, ContactPageProps } from "~/features/contact"
import { AppPage } from "~/model/PageProps"

const Page: AppPage<ContactPageProps> = props => {
  return <ContactPage {...props} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export default Page
