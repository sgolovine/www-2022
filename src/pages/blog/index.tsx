import { PageLayout } from "~/components/layout"
import { AllPostsPage } from "~/features/blog"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import { pageNavigationConfig } from "~/features/blog/config/pageNavigation"
import { getAllPosts } from "~/services/getAllPosts.node"
import { AllPostsPageProps } from "~/features/blog/types/AllPostsPageProps"

const Page: AppPage<AllPostsPageProps> = ({ posts }) => {
  return <AllPostsPage posts={posts} />
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

export async function getStaticProps(): StaticProps<AllPostsPageProps> {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
    },
  }
}

export default Page
