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
    id: "resume",
    title: labels.headerRoutes.resume,
    href: Routes.Resume,
  },
  {
    id: "contact",
    title: labels.headerRoutes.contact,
    href: Routes.Contact,
  },
]

export default routes
