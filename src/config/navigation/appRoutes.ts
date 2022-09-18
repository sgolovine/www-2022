import pageTitles from "./pageTitles"
import { AppRoute, Routes } from "~/model/Routes"

const appRoutes: AppRoute[] = [
  {
    id: "home",
    title: pageTitles[Routes.Home],
    link: Routes.Home,
    showOnHeader: true,
    showOnHomepage: false,
  },
  {
    id: "work",
    title: pageTitles[Routes.Work],
    link: Routes.Work,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "officeBuilding",
  },
  {
    id: "blog",
    title: pageTitles[Routes.Blog],
    link: Routes.Blog,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "pencilSquare",
  },
  {
    id: "resume",
    title: pageTitles[Routes.Resume],
    link: Routes.Resume,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "documentText",
  },
  {
    id: "snippets",
    title: pageTitles[Routes.BlogSnippets],
    link: Routes.BlogSnippets,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "paperClip",
  },
  {
    id: "contact",
    title: pageTitles[Routes.Contact],
    link: Routes.Contact,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "envelope",
  },
]

export default appRoutes
