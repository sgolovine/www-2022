import { categoryLabels } from "~/config/categoryLabels"
import CategoryPage from "~/features/blog/pages/CategoryPage"
import { CategoryPageProps } from "~/features/blog/types/CategoryPageProps"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getPostsByCategory } from "~/services/getPostsByCategory.node"
import { getStaticCategoryPaths } from "~/services/getStaticCategoryPaths.node"

interface Params {
  params: {
    category: string
  }
}

const Page: AppPage<CategoryPageProps> = ({ posts, headerLabel }) => {
  return <CategoryPage posts={posts} headerLabel={headerLabel} />
}

export const getStaticProps = async ({
  params: { category },
}: Params): StaticProps<CategoryPageProps> => {
  const posts = await getPostsByCategory(category)
  const headerLabel = categoryLabels[category as keyof typeof categoryLabels]

  return {
    props: {
      posts,
      headerLabel,
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
