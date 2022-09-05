import { HeaderRoute } from "~/model/HeaderRoute"
import { Routes } from "~/model/Routes"
import labels from "~/labels.json"

const routes: HeaderRoute[] = [
  {
    id: "home",
    title: labels.headerRoutes.home,
    href: Routes.Home,
  },
  {
    id: "work",
    title: labels.headerRoutes.work,
    href: Routes.Work,
  },
  {
    id: "blog",
    title: labels.headerRoutes.blog,
    href: Routes.Blog,
  },
  {
    id: "snippets",
    title: labels.headerRoutes.snippets,
    href: Routes.Snippets,
  },
  {
    id: "resume",
    title: labels.headerRoutes.resume,
    href: Routes.Resume,
  },
]

export default routes
