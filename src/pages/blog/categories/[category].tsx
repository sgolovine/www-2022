import { AppPage } from "~/model/PageProps"
import { BlogPost, PostMap } from "~/model/Post"
import { getPostsByCategory } from "~/services/getPostsByCategory.node"
import { getStaticCategoryPaths } from "~/services/getStaticCategoryPaths.node"

interface Params {
  params: {
    category: string
  }
}

interface Props {
  posts: PostMap<BlogPost>
}

const Page: AppPage<Props> = ({ posts }) => {
  return (
    <div>
      {posts.data.map((item, idx) => {
        return <p key={idx}>{item.postMetadata.title}</p>
      })}
    </div>
  )
}

Page.getLayout = page => <div>{page}</div>

export const getStaticProps = async ({ params: { category } }: Params) => {
  const posts = await getPostsByCategory(category)

  return {
    props: {
      posts,
    },
  }
}

export const getStaticPaths = async () => {
  const { paths } = await getStaticCategoryPaths()

  return {
    paths,
    fallback: false,
  }
}

export default Page
