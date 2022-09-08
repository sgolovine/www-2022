import { PageLayout } from "~/components/layout"
import PostTemplate from "~/features/blog/templates/PostTemplate"
import { AppPage, StaticProps } from "~/model/PageProps"
import { BlogPost, Snippet } from "~/model/Post"
import { getPostBySlug } from "~/services/getPostBySlug.node"
import { getStaticPostPaths } from "~/services/getStaticPostPaths.node"

interface Params {
  params: {
    slug: string
  }
}

interface Props {
  preview?: string
  metadata: BlogPost | Snippet
}

const Page: AppPage<Props> = ({ preview, metadata }) => {
  return <PostTemplate meta={metadata} />
}

Page.getLayout = page => (
  <PageLayout header={{ showBackArrow: true }}>{page}</PageLayout>
)

export const getStaticProps = async ({
  params: { slug },
}: Params): StaticProps<Props> => {
  const post = await getPostBySlug(slug)
  if (!post) {
    throw "Error fetching post"
  }

  return {
    props: {
      preview: post.postPreview,
      metadata: post.postMetadata,
    },
  }
}

export const getStaticPaths = async () => {
  const staticPostPaths = await getStaticPostPaths()

  return {
    paths: staticPostPaths.paths,
    fallback: false,
  }
}

export default Page
