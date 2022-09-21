import { PageLayout } from "~/components/layout"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => {
  return (
    <div>
      <p>Category Page</p>
    </div>
  )
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>
