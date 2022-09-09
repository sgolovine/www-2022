import { MDXRemoteSerializeResult } from "next-mdx-remote"
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
  metadata: BlogPost | Snippet
  mdx: string
}

const Page: AppPage<Props> = ({ metadata, mdx }) => {
  return <PostTemplate meta={metadata} mdx={mdx} />
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
      metadata: post.meta.postMetadata,
      mdx: post.mdx,
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
