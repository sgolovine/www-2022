import { PageLayout } from "~/components/layout"
import { pageNavigationConfig } from "~/features/blog/config/pageNavigation"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import { getAllCategories } from "~/services/getAllCategories.node"
import { CategoriesPageProps } from "~/features/blog/types/CategoriesPageProps"
import CategoriesPage from "~/features/blog/pages/CategoriesPage"

const Page: AppPage<CategoriesPageProps> = ({ categories }) => {
  return <CategoriesPage categories={categories} />
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

export const getStaticProps = async (): StaticProps<CategoriesPageProps> => {
  const allCategories = await getAllCategories()
  return {
    props: {
      categories: allCategories,
    },
  }
}

export default Page
