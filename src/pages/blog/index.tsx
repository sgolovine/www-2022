import { PageLayout } from "~/components/layout"
import {
  AllPostsPage,
  AllPostsPageProps,
  pageNavigationConfig,
} from "~/features/blog"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import { getAllPosts } from "~/services/getAllPosts.node"

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
