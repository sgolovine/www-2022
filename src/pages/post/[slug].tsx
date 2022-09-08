import { AppPage, StaticProps } from "~/model/PageProps"
import { BlogPost } from "~/model/Post"
import { getPostBySlug } from "~/services/getPostBySlug.node"
import { getStaticPostPaths } from "~/services/getStaticPostPaths.node"

interface Params {
  params: {
    slug: string
  }
}

interface Props {
  preview?: string
  metadata: BlogPost
}

const Page: AppPage<Props> = () => {
  return (
    <div>
      <p>Post Template Page</p>
    </div>
  )
}

Page.getLayout = page => <div>{page}</div>

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
