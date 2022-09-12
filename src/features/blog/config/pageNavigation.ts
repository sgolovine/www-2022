import { HeaderRoute } from "~/model/HeaderRoute"
import labels from "~/labels.json"
import { Routes } from "~/model/Routes"

export const pageNavigationConfig: HeaderRoute[] = [
  {
    id: "allPosts",
    title: labels.blog.allPosts,
    href: Routes.Blog,
  },
  // {
  //   id: "categories",
  //   title: labels.blog.categories,
  //   href: Routes.BlogCategories,
  // },
  { id: "snippets", title: labels.blog.snippets, href: Routes.BlogSnippets },
]
