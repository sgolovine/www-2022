import { PageLayout } from "~/components/layout"
import { pageNavigationConfig } from "~/features/blog/config/pageNavigation"
import { AppPage } from "~/model/PageProps"
import labels from "~/labels.json"

const Page: AppPage = () => {
  return (
    <div>
      <p>Snippets</p>
    </div>
  )
}

Page.getLayout = page => (
  <PageLayout
    header={{
      title: labels.headerRoutes.blog,
      pageNavigation: pageNavigationConfig,
    }}
  >
    {page}
  </PageLayout>
)

export default Page
