import { PageLayout } from "~/components/layout"
import { AppPage, StaticProps } from "~/model/PageProps"
import { CategoryLandingPageProps, CategoryLandingPage } from "~/features/blog"
import { getAllCategories } from "~/services/getAllCategories.node"

const Page: AppPage<CategoryLandingPageProps> = ({ categories }) => {
  return <CategoryLandingPage categories={categories} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

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
