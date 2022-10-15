import { PageLayout } from "~/components/layout"
import { PostTemplatePageProps, PostTemplatePage } from "~/features/blog"
import { PostSeo } from "~/features/blog/seo/PostSEO"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getPostBySlug } from "~/services/node/getPostBySlug.node"
import { getRecentPosts } from "~/services/node/getRecentPosts.node"
import { getStaticPostPaths } from "~/services/node/getStaticPostPaths.node"

interface Params {
  params: {
    slug: string
  }
}

const Page: AppPage<PostTemplatePageProps> = ({ meta, mdx, recentPosts }) => (
  <>
    <PostSeo metadata={meta} />
    <PostTemplatePage meta={meta} mdx={mdx} recentPosts={recentPosts} />
  </>
)

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export const getStaticProps = async ({
  params: { slug },
}: Params): StaticProps<PostTemplatePageProps> => {
  const post = await getPostBySlug(slug)
  const recentPosts = await getRecentPosts(slug)
  if (!post) {
    throw "Error fetching post"
  }

  return {
    props: {
      meta: post.meta.postMetadata,
      mdx: post.mdx,
      recentPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const { paths } = await getStaticPostPaths({ snippet: false })

  return {
    paths: paths,
    fallback: false,
  }
}

export default Page
