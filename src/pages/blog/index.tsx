import { useRouter } from "next/router"
import { useMemo } from "react"
import { PageSEO } from "~/components/common/PageSEO"
import { PageLayout } from "~/components/layout"
import { AllPostsPage, AllPostsPageProps } from "~/features/blog"
import { createPageNavigationConfig } from "~/features/blog/helpers/createPageNavigationConfig"
import { sortPostsByDate } from "~/features/blog/helpers/sortPostsByDate"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getMap } from "~/services/getMap.node"
import labels from "~/labels.json"

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
    <>
      <PageSEO
        title={`${labels.seo.defaultTitle} | ${labels.pageTitles.blog}`}
        description={labels.seo.defaultDescription}
      />
      <PageLayout pageLinks={pageNavigation}>
        <AllPostsPage posts={posts} />
      </PageLayout>
    </>
  )
}

export async function getStaticProps(): StaticProps<AllPostsPageProps> {
  const contentMap = await getMap()
  const postsSortedByDate = sortPostsByDate(contentMap.posts)
  return {
    props: {
      posts: postsSortedByDate,
      categories: contentMap.postCategories,
    },
  }
}

export default Page
