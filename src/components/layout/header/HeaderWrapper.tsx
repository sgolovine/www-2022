// This provides the header component wrapped with the required hooks
// and logic to drop straight into the layout with no additional props.
import useHeader from "./useHeader"
import Header from "./Header"
import { HeaderRoute, Routes } from "~/model/Routes"
import useLayoutStore from "~/stores/layoutStore"

interface Props {
  pageLinks?: HeaderRoute[]
  overrideCurrentRoute?: Routes
}

const HeaderWrapper: React.FC<Props> = ({
  pageLinks,
  overrideCurrentRoute,
}) => {
  const { headerRoutes, pageTitle, pageRoutes } = useHeader({
    pageLinks,
    overrideCurrentRoute,
  })

  const { menuOpen, openMenu, closeMenu } = useLayoutStore()

  return (
    <Header
      menuOpen={menuOpen}
      headerLinks={headerRoutes}
      title={pageTitle}
      pageLinks={pageRoutes}
      onMenuClick={menuOpen ? closeMenu : openMenu}
    />
  )
}

export default HeaderWrapper
