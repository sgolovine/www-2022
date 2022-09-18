import { HeaderRoute } from "~/model/Routes"
import { Button, ButtonProps } from "../common/button"
import { IconButton } from "../common/iconButton"
import { ThemeSwitch } from "../themeSwitch"
import { makeStyles } from "./Header.classes"

interface Props {
  title: string
  headerLinks: HeaderRoute[]
  pageLinks?: HeaderRoute[]
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

const Header: React.FC<Props> = ({ headerLinks, pageLinks }) => {
  const {
    containerClasses,
    linksContainer,
    themeSwitchContainer,
    mobileMenuContainer,
    mobileTitleContainer,
    mobileTitleText,
    pageNavigationContainer,
    pageNav,
  } = makeStyles({ showPageNav: !!pageLinks })

  return (
    <>
      <div className={containerClasses}>
        <div className={mobileTitleContainer}>
          <p className={mobileTitleText}>Title</p>
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
          <IconButton icon="bars3" />
        </div>
      </div>
      <div className={pageNavigationContainer}>
        <div className={pageNav}>
          {pageLinks &&
            pageLinks.map(link => {
              return (
                <Button key={link.id} {...pageNavButtonBaseProps}>
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
