import { useRouter } from "next/router"
import { useMemo } from "react"
import { PageLayout } from "~/components/layout"
import { createPageNavigationConfig } from "~/features/blog/helpers/createPageNavigationConfig"
import { filterPostsByCategory } from "~/features/blog/helpers/getPostByCategory"
import { sortPostsByDate } from "~/features/blog/helpers/sortPostsByDate"
import CategoryLandingPage from "~/features/blog/pages/CategoryLandingPage"
import {
  CategoryLandingRouteParams,
  CategoryLandingRouteProps,
} from "~/features/blog/types/CategoryLandingPageProps"
import { AppPage, StaticProps } from "~/model/PageProps"
import { Routes } from "~/model/Routes"
import { getMap } from "~/services/getMap.node"
import { getStaticCategoryPaths } from "~/services/getStaticCategoryPaths.node"

const Page: AppPage<CategoryLandingRouteProps> = ({
  postCategories,
  postsByCurrentCategory,
  currentCategory,
}) => {
  const router = useRouter()

  const pageNavigation = useMemo(
    () =>
      createPageNavigationConfig({
        categories: postCategories,
        cb: router.push,
        currentCategory: currentCategory.value,
      }),
    [currentCategory.value, postCategories, router.push]
  )

  return (
    <PageLayout overrideCurrentRoute={Routes.Blog} pageLinks={pageNavigation}>
      <CategoryLandingPage
        currentCategory={currentCategory}
        postsByCurrentCategory={postsByCurrentCategory}
      />
    </PageLayout>
  )
}

export async function getStaticProps({
  params: { category },
}: CategoryLandingRouteParams): StaticProps<CategoryLandingRouteProps> {
  const contentMap = await getMap()
  const postsByCategory = sortPostsByDate(
    filterPostsByCategory(category, contentMap).data
  )
  return {
    props: {
      postCategories: contentMap.posts.categories,
      postsByCurrentCategory: postsByCategory,
      currentCategory: contentMap.posts.categories.find(
        item => item.value === category
      ),
    },
  }
}

export async function getStaticPaths() {
  return getStaticCategoryPaths()
}

export default Page
