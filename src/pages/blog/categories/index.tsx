import { PageLayout } from "~/components/layout"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import {
  CategoryLandingPageProps,
  CategoryLandingPage,
  pageNavigationConfig,
} from "~/features/blog"
import { getAllCategories } from "~/services/getAllCategories.node"

const Page: AppPage<CategoryLandingPageProps> = ({ categories }) => {
  return <CategoryLandingPage categories={categories} />
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

export const getStaticProps =
  async (): StaticProps<CategoryLandingPageProps> => {
    const allCategories = await getAllCategories()
    return {
      props: {
        categories: allCategories,
      },
    }
  }

export default Page
