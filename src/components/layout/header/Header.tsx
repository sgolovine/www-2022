import { HeaderRoute } from "~/model/Routes"
import { Button, ButtonProps } from "~/components/common/button"
import { IconButton } from "~/components/common/iconButton"
import ThemeSwitch from "../themeSwitch/ThemeSwitch"
import { makeStyles } from "./Header.classes"
import clsx from "clsx"
import { ExternalLinks } from "~/config/externalLinks"
import { DevMenu } from "~/components/devMenu"

interface Props {
  menuOpen: boolean
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
  menuOpen,
}) => {
  const showPageLinks = (pageLinks && pageLinks.length > 0) ?? false
  const {
    containerClasses,
    contentContainer,
    linksContainer,
    themeSwitchContainer,
    mobileMenuContainer,
    mobileTitleContainer,
    mobileTitleText,
    pageNavigationContainer,
    pageNav,
    headerRightContainer,
  } = makeStyles({ showPageNav: showPageLinks })

  const handleGithubIconClick = () => {
    if (typeof window !== undefined) {
      window.location.href = ExternalLinks.GithubRepo
    }
  }

  return (
    <>
      <div className={containerClasses}>
        <div className={clsx(contentContainer, "justify-between")}>
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
          <div className={headerRightContainer}>
            <DevMenu />
            <IconButton onClick={handleGithubIconClick} icon="github" />
            <div className={themeSwitchContainer}>
              <ThemeSwitch />
            </div>
            <div className={mobileMenuContainer}>
              <IconButton
                onClick={onMenuClick}
                icon={menuOpen ? "close" : "bars3"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={pageNavigationContainer}>
        <div className={pageNav}>
          {(pageLinks ?? []).map(pageLink => {
            return (
              <Button
                {...pageNavButtonBaseProps}
                key={pageLink.id}
                isActive={pageLink.isActive}
                onClick={() =>
                  pageLink.onClick && pageLink.onClick(pageLink.link)
                }
              >
                {pageLink.title}
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Header
