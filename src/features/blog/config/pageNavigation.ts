import labels from "~/labels.json"
import { HeaderRoute, Routes } from "~/model/Routes"

export const pageNavigationConfig: HeaderRoute[] = [
  {
    id: "allPosts",
    title: labels.blog.allPosts,
    link: Routes.Blog,
    showOnHeader: false,
    showOnHomepage: false,
  },
]
