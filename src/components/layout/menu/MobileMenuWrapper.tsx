import MobileMenu from "./MobileMenu"
import { useRouter } from "next/router"
import useLayoutStore from "~/stores/layoutStore"
import { useMemo } from "react"
import appRoutes from "~/config/navigation/appRoutes"
import { HeaderRoute } from "~/model/Routes"

const MobileMenuWrapper: React.FC = () => {
  const { menuOpen, closeMenu } = useLayoutStore()
  const { push } = useRouter()

  const routes: HeaderRoute[] = useMemo(() => {
    return appRoutes
      .filter(route => route.showOnHeader)
      .map(route => ({
        ...route,
        // We do not care about the current route
        // For now when rendering the mobile menu.
        onClick: () => push(route.link),
      }))
    // No need to check for `push`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <MobileMenu routes={routes} visible={menuOpen} onClose={closeMenu} />
}

export default MobileMenuWrapper
