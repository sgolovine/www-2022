import { PageLayout } from "~/components/layout"
import { featureFlags } from "~/config/featureFlags"
import { featureStubs } from "~/config/featureStubs"
import { BlogPage } from "~/features/blog"
import { useFeatureRedirect } from "~/hooks/useFeatureRedirect"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import { pageNavigationConfig } from "~/features/blog/config/pageNavigation"
import { getAllPosts } from "~/services/getAllPosts.node"
import { BlogPageProps } from "~/features/blog/types/BlogPageProps"

const Page: AppPage<BlogPageProps> = ({ posts }) => {
  useFeatureRedirect({
    url: featureStubs.blog,
    flag: featureFlags.nativeBlogPage,
  })

  return <BlogPage posts={posts} />
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

export async function getStaticProps(): StaticProps<BlogPageProps> {
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
    },
  }
}

export default Page
