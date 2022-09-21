import { PageLayout } from "~/components/layout"
import {
  AllPostsPage,
  AllPostsPageProps,
  pageNavigationConfig,
} from "~/features/blog"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getMap } from "~/services/getMap.node"

const Page: AppPage<AllPostsPageProps> = ({ posts }) => {
  return <AllPostsPage posts={posts} />
}

Page.getLayout = page => (
  <PageLayout pageLinks={pageNavigationConfig}>{page}</PageLayout>
)

export async function getStaticProps(): StaticProps<AllPostsPageProps> {
  const postMap = await getMap()
  return {
    props: {
      posts: postMap.posts,
    },
  }
}

export default Page
