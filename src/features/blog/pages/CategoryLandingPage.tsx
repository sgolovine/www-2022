import clsx from "clsx"
import Link from "next/link"
import { categoryLabels } from "~/config/categoryLabels"
import { themeClasses } from "~/config/themeClasses"
import { AppPage } from "~/model/PageProps"
import BlogListLayout from "../components/BlogListLayout"
import { CategoryLandingPageProps } from "../types/CategoryLandingPageProps"

const CategoryLandingPage: AppPage<CategoryLandingPageProps> = ({
  categories,
}) => (
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

export default CategoryLandingPage
