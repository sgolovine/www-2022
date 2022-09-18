// This provides the header component wrapped with the required hooks
// and logic to drop straight into the layout with no additional props.
import useHeader from "./useHeader"
import Header from "./Header"
import { HeaderRoute } from "~/model/Routes"
import clsx from "clsx"
import { useState } from "react"
import { MobileMenu } from "../mobileMenu"

interface Props {
  pageLinks?: HeaderRoute[]
}

const HeaderWrapper: React.FC<Props> = ({ pageLinks }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { headerRoutes, pageTitle } = useHeader()

  const menuWrapperClasses = clsx({
    hidden: !menuOpen,
    contents: menuOpen,
  })

  return (
    <>
      <Header
        headerLinks={headerRoutes}
        title={pageTitle}
        pageLinks={pageLinks}
        onMenuClick={() => setMenuOpen(true)}
      />
      <span className={menuWrapperClasses}>
        <MobileMenu onClose={() => setMenuOpen(false)} routes={headerRoutes} />
      </span>
    </>
  )
}

export default HeaderWrapper
