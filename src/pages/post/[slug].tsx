import { PageLayout } from "~/components/layout"
import PostTemplate from "~/features/blog/pages/PostTemplatePage"
import { PostTemplatePageProps } from "~/features/blog/types/PostTemplatePageProps"
import { AppPage, StaticProps } from "~/model/PageProps"
import { BlogPost, Snippet } from "~/model/Post"
import { getPostBySlug } from "~/services/getPostBySlug.node"
import { getStaticPostPaths } from "~/services/getStaticPostPaths.node"

interface Params {
  params: {
    slug: string
  }
}

const Page: AppPage<PostTemplatePageProps> = ({ meta, mdx }) => {
  return <PostTemplate meta={meta} mdx={mdx} />
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
