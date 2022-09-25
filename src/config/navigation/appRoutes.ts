import pageTitles from "./pageTitles"
import { AppRoute, StaticRoutes } from "~/model/Routes"
import { featureFlags } from "../featureFlags"

const appRoutes: AppRoute[] = [
  {
    id: "home",
    title: pageTitles[StaticRoutes.Home],
    link: StaticRoutes.Home,
    showOnHeader: true,
    showOnHomepage: false,
  },
  {
    id: "work",
    title: pageTitles[StaticRoutes.Work],
    link: StaticRoutes.Work,
    routeEnabled: featureFlags.enableWorkPage,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "officeBuilding",
  },
  {
    id: "blog",
    title: pageTitles[StaticRoutes.Blog],
    link: StaticRoutes.Blog,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "pencilSquare",
  },
  {
    id: "resume",
    title: pageTitles[StaticRoutes.Resume],
    link: StaticRoutes.Resume,
    routeEnabled: featureFlags.enableResume,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "documentText",
  },
  {
    id: "snippets",
    title: pageTitles[StaticRoutes.BlogSnippets],
    link: StaticRoutes.BlogSnippets,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "paperClip",
  },
  {
    id: "contact",
    title: pageTitles[StaticRoutes.Contact],
    link: StaticRoutes.Contact,
    showOnHeader: true,
    showOnHomepage: true,
    icon: "envelope",
  },
].filter(route => {
  if (
    typeof route.routeEnabled === "undefined" ||
    (typeof route.routeEnabled === "boolean" && route.routeEnabled)
  ) {
    return route
  }
}) as AppRoute[]

export default appRoutes
