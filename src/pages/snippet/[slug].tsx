import { PageLayout } from "~/components/layout"
import SnippetTemplatePage from "~/features/blog/pages/SnippetTemplatePage"
import { SnippetSEO } from "~/features/blog/seo/SnippetSEO"
import { SnippetTemplatePageProps } from "~/features/blog/types/SnippetTemplatePageProps"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getSnippetBySlug } from "~/services/getPostBySlug.node"
import { getStaticPostPaths } from "~/services/getStaticPostPaths.node"

interface Params {
  params: {
    slug: string
  }
}

const Page: AppPage<SnippetTemplatePageProps> = ({ meta, mdx }) => (
  <>
    <SnippetSEO metadata={meta} />
    <SnippetTemplatePage meta={meta} mdx={mdx} />
  </>
)

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export const getStaticProps = async ({
  params: { slug },
}: Params): StaticProps<SnippetTemplatePageProps> => {
  const post = await getSnippetBySlug(slug)
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
  const { paths } = await getStaticPostPaths({ snippet: true })

  return {
    paths: paths,
    fallback: false,
  }
}

export default Page
