import { HeaderRoute } from "~/model/Routes"
import { Button, ButtonProps } from "../common/button"
import { IconButton } from "../common/iconButton"
import { ThemeSwitch } from "../themeSwitch"
import { makeStyles } from "./Header.classes"

interface Props {
  title?: string
  headerLinks: HeaderRoute[]
  pageLinks?: HeaderRoute[]
  onMenuClick?: () => void
}

const buttonBaseProps: Partial<ButtonProps> = {
  sm: false,
  transparent: true,
  noBorder: true,
}

const pageNavButtonBaseProps: Partial<ButtonProps> = {
  sm: true,
  transparent: true,
  noBorder: true,
}

const Header: React.FC<Props> = ({
  headerLinks,
  pageLinks,
  title,
  onMenuClick,
}) => {
  const showPageLinks = (pageLinks && pageLinks.length > 0) ?? false
  const {
    containerClasses,
    linksContainer,
    themeSwitchContainer,
    mobileMenuContainer,
    mobileTitleContainer,
    mobileTitleText,
    pageNavigationContainer,
    pageNav,
  } = makeStyles({ showPageNav: showPageLinks })

  return (
    <>
      <div className={containerClasses}>
        <div className={mobileTitleContainer}>
          <p className={mobileTitleText}>{title ?? ""}</p>
        </div>
        <div className={linksContainer}>
          {headerLinks.map(link => {
            return (
              <Button
                {...buttonBaseProps}
                isActive={link.isActive}
                key={link.id}
                onClick={() => link.onClick && link.onClick(link.link)}
              >
                {link.title}
              </Button>
            )
          })}
        </div>
        <div className={themeSwitchContainer}>
          <ThemeSwitch />
        </div>
        <div className={mobileMenuContainer}>
          <IconButton onClick={onMenuClick} icon="bars3" />
        </div>
      </div>
      <div className={pageNavigationContainer}>
        <div className={pageNav}>
          {(pageLinks ?? []).map(link => {
            return (
              <Button
                {...pageNavButtonBaseProps}
                key={link.id}
                isActive={link.isActive}
                onClick={() => link.onClick && link.onClick(link.link)}
              >
                {link.title}
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Header
