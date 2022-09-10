import { PageLayout } from "~/components/layout"
import { PostTemplatePageProps, PostTemplatePage } from "~/features/blog"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getPostBySlug } from "~/services/getPostBySlug.node"
import { getStaticPostPaths } from "~/services/getStaticPostPaths.node"

interface Params {
  params: {
    slug: string
  }
}

const Page: AppPage<PostTemplatePageProps> = ({ meta, mdx }) => {
  return <PostTemplatePage meta={meta} mdx={mdx} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export const getStaticProps = async ({
  params: { slug },
}: Params): StaticProps<PostTemplatePageProps> => {
  const post = await getPostBySlug(slug)
  if (!post) {
    throw "Error fetching post"
  }

  return {
    props: {
      meta: post.meta.postMetadata,
      mdx: post.mdx,
    },
  }
}

export const getStaticPaths = async () => {
  const { paths } = await getStaticPostPaths()

  return {
    paths: paths,
    fallback: false,
  }
}

export default Page
