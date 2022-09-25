import { useRouter } from "next/router"
import { useMemo } from "react"
import { PageLayout } from "~/components/layout"
import { AllPostsPage, AllPostsPageProps } from "~/features/blog"
import { createPageNavigationConfig } from "~/features/blog/helpers/createPageNavigationConfig"
import { sortPostsByDate } from "~/features/blog/helpers/sortPostsByDate"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getMap } from "~/services/getMap.node"

const Page: AppPage<AllPostsPageProps> = ({ posts, categories }) => {
  const router = useRouter()

  const pageNavigation = useMemo(
    () =>
      createPageNavigationConfig({
        categories: categories,
        cb: router.push,
        indexPage: true,
      }),
    [categories, router.push]
  )

  return (
    <PageLayout pageLinks={pageNavigation}>
      <AllPostsPage posts={posts} />
    </PageLayout>
  )
}

export async function getStaticProps(): StaticProps<AllPostsPageProps> {
  const postMap = await getMap()
  const postsSortedByDate = sortPostsByDate(postMap.posts)
  return {
    props: {
      posts: postsSortedByDate,
      categories: postMap.postCategories,
    },
  }
}

export default Page
