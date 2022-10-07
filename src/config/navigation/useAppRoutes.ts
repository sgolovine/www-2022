import pageTitles from "./pageTitles"
import { AppRoute, StaticRoutes } from "~/model/Routes"
import { useFeatures } from "~/context/FeaturesContext"

const useAppRoutes = () => {
  const features = useFeatures()
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
      routeEnabled: features.isFeatureEnabled("enableWorkPage"),
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
      routeEnabled: features.isFeatureEnabled("enableResume"),
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
      routeEnabled: features.isFeatureEnabled("showAppsLink"),
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
