import { PageLayout } from "~/components/layout"
import { pageNavigationConfig } from "~/features/blog/config/pageNavigation"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import { getAllCategories } from "~/services/getAllCategories.node"
import { categoryLabels } from "~/config/categoryLabels"
import Link from "next/link"
import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import BlogListLayout from "~/features/blog/components/BlogListLayout"

interface Props {
  categories: string[]
}

const Page: AppPage<Props> = ({ categories }) => {
  return (
    <BlogListLayout>
      {categories?.map(category => {
        return (
          <Link key={category} href={`/blog/categories/${category}`}>
            <div
              className={clsx(
                themeClasses.transition,
                themeClasses.buttonColor,
                "py-2",
                "px-4",
                "rounded-lg"
              )}
            >
              <p className={clsx(themeClasses.textColor)}>
                {categoryLabels[category as keyof typeof categoryLabels]}
              </p>
            </div>
          </Link>
        )
      })}
    </BlogListLayout>
  )
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

export const getStaticProps = async (): StaticProps<Props> => {
  const allCategories = await getAllCategories()
  return {
    props: {
      categories: allCategories,
    },
  }
}

export default Page
