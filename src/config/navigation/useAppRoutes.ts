import pageTitles from "./pageTitles"
import { AppRoute, StaticRoutes } from "~/model/Routes"
import { features } from "../features"

const useAppRoutes = () => {
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
      title: pageTitles[StaticRoutes.Projects],
      link: StaticRoutes.Projects,
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
      routeEnabled: features.enableResume,
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
      id: "apps",
      title: pageTitles[StaticRoutes.Apps],
      link: StaticRoutes.Apps,
      routeEnabled: features.showAppsLink,
      showOnHeader: true,
      showOnHomepage: true,
      icon: "apps",
    },
    {
      id: "contact",
      title: pageTitles[StaticRoutes.Contact],
      link: StaticRoutes.Contact,
      showOnHeader: true,
      showOnHomepage: true,
      icon: "envelope",
    },
    {
      id: "guestbook",
      title: pageTitles[StaticRoutes.Guestbook],
      link: StaticRoutes.Guestbook,
      showOnHeader: true,
      showOnHomepage: true,
      icon: "guestbook",
      routeEnabled: features.showGuestbook,
    },
  ].filter(route => {
    if (
      typeof route.routeEnabled === "undefined" ||
      (typeof route.routeEnabled === "boolean" && route.routeEnabled)
    ) {
      return route
    }
  }) as AppRoute[]

  return appRoutes
}

export default useAppRoutes
