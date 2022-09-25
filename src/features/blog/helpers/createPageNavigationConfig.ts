import { ContentMapCategory } from "~/model/Post"
import { HeaderRoute } from "~/model/Routes"
import labels from "~/labels.json"
import { Routes } from "~/model/Routes"

interface Args {
  categories: ContentMapCategory[]
  cb: (route: string) => void
  currentCategory?: string
  // Special value for the index page to override the current route
  indexPage?: boolean
}

export function createPageNavigationConfig({
  categories,
  cb,
  currentCategory,
  indexPage,
}: Args): HeaderRoute[] {
  const categoryRoutes = categories.map(category => ({
    id: category.value,
    title: category.label,
    link: `/blog/category/${category.value}`,
    routeEnabled: true,
    showOnHeader: false,
    showOnHomepage: false,
    // If we have `indexPage` active, set all other values to false
    isActive: indexPage ? false : category.value === currentCategory,
    onClick: cb,
  }))

  return [
    {
      id: "allPosts",
      title: labels.blog.allPosts,
      link: Routes.Blog,
      showOnHeader: false,
      showOnHomepage: false,
      isActive: indexPage ? true : false,
    },
    ...categoryRoutes,
  ]
}
