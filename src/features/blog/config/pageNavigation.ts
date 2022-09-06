import { HeaderRoute } from "~/model/HeaderRoute"
import labels from "~/labels.json"
import { Routes } from "~/model/Routes"

export const pageNavigationConfig: HeaderRoute[] = [
  {
    id: "categories",
    title: labels.blog.categories,
    href: Routes.BlogCategories,
  },
  { id: "two", title: labels.blog.snippets, href: Routes.BlogSnippets },
]
