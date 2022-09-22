import { useRouter } from "next/router"
import { useMemo } from "react"
import appRoutes from "~/config/navigation/appRoutes"
import pageTitles from "~/config/navigation/pageTitles"
import { HeaderRoute, AppRoute, Routes } from "~/model/Routes"

const useHeader = ({
  pageLinks,
  overrideCurrentRoute,
}: {
  pageLinks?: HeaderRoute[]
  overrideCurrentRoute?: Routes
}) => {
  const router = useRouter()
  const currentRoute = router.pathname as Routes
  const pageTitle = pageTitles[currentRoute] ?? ""

  const headerRoutes = useMemo(() => {
    const handleRouteClick = (route: string) => {
      router.push(route)
    }
    const filteredRoutes = appRoutes.filter(route => route.showOnHeader)

    const withCurrentActiveRoute: HeaderRoute[] = filteredRoutes.reduce(
      (acc: HeaderRoute[], item: AppRoute) => {
        if (overrideCurrentRoute && overrideCurrentRoute === item.link) {
          return [
            ...acc,
            {
              ...item,
              isActive: true,
              onClick: handleRouteClick,
            },
          ]

          // When we have an `overrideCurrentRoute`
          // set all other routes to false
        } else if (overrideCurrentRoute) {
          return [
            ...acc,
            {
              ...item,
              isActive: item.link === currentRoute,
              onClick: handleRouteClick,
            },
          ]
        }
        return [
          ...acc,
          {
            ...item,
            isActive: item.link === currentRoute,
            onClick: handleRouteClick,
          },
        ]
      },
      [] as HeaderRoute[]
    )

    return withCurrentActiveRoute
    // We depend on the router by depending on `currentRoute`
    // We do not need to depend on other parts of the router such
    // As `push`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoute])

  const pageRoutes = useMemo(() => {
    const handleRouteClick = (route: string) => {
      router.push(route)
    }
    const withCurrentActiveRoute: HeaderRoute[] = (pageLinks ?? []).reduce(
      (acc: HeaderRoute[], item: AppRoute) => {
        return [
          ...acc,
          {
            ...item,
            onClick: handleRouteClick,
          },
        ]
      },
      [] as HeaderRoute[]
    )
    return withCurrentActiveRoute
    // See above for why this is disabled.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoute, pageLinks])

  return { headerRoutes, pageTitle, pageRoutes }
}

export default useHeader
