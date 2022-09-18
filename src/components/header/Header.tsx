import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import headerRoutes from "~/config/headerRoutes"
import { HeaderRoute } from "~/model/HeaderRoute"
import { getIcon } from "../icons"
import { MobileMenu } from "../mobileMenu"
import { ThemeSwitch } from "../themeSwitch"
import { themeClasses } from "~/config/themeClasses"
import Headroom from "react-headroom"

export interface HeaderProps {
  title?: string
  pageNavigation?: HeaderRoute[]
}
const MenuIcon = getIcon("bars3")
const CloseIcon = getIcon("close")
const ArrowLeft = getIcon("arrowLeft")

const getLinkClasses = (isActive: boolean) =>
  clsx(
    themeClasses.buttonColor,
    themeClasses.textColor,
    themeClasses.transition,
    "font-medium",
    "px-4",
    "py-2",
    "rounded-md",
    "ring-gray-200",
    "dark:ring-slate-800",
    {
      "text-blue-500": isActive,
      "dark:text-blue-500": isActive,
    }
  )

const getSublinkClasses = (isActive: boolean) =>
  clsx(
    themeClasses.buttonColor,
    themeClasses.textColor,
    themeClasses.transition,
    "px-3",
    "py-1",
    "rounded-md",
    {
      "text-blue-500": isActive,
      "dark:text-blue-500": isActive,
    }
  )

const headerBg = clsx("bg-white", "dark:bg-slate-900")

const containerClasses = clsx(
  headerBg,
  "w-full",
  "flex",
  "flex-row",
  "items-center",
  "justify-start",
  "border-b-2",
  "border-gray-200",
  "dark:border-slate-700",
  "h-14",
  "px-4"
)

const headerLinkContainerClasses = clsx(
  "hidden",
  "sm:flex",
  "flex-row",
  "items-center",
  "gap-4",
  "grow-0",
  "sm:grow",
  "px-2"
)

const Header: React.FC<HeaderProps> = ({ title, pageNavigation }) => {
  const showPageNavigation = !!pageNavigation
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { pathname: currentRoute } = useRouter()

  return (
    <>
      <Headroom upTolerance={5} downTolerance={5}>
        <div className={containerClasses}>
          <span className="grow sm:grow-0">
            {title && (
              <p className="text-lg sm:hidden font-bold text-gray-800 dark:text-gray-50">
                {title}
              </p>
            )}
          </span>
          <div className={headerLinkContainerClasses}>
            {headerRoutes.map(route => {
              const linkClasses = getLinkClasses(route.href === currentRoute)
              return (
                <Link key={route.id} href={route.href}>
                  <a className={linkClasses}>{route.title}</a>
                </Link>
              )
            })}
          </div>
          <span
            className="block sm:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <button className="dark:text-white">
              {menuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </span>
          <span className="hidden sm:block">
            <ThemeSwitch />
          </span>
        </div>
        {showPageNavigation && (
          <div
            className={clsx(
              headerBg,
              "border-b-2",
              "p-1",
              "border-gray-200",
              "dark:border-slate-700"
            )}
          >
            <div className="flex flex-row justify-center">
              <div className="inline-flex flex-row gap-5">
                {pageNavigation?.map(item => {
                  const classes = getSublinkClasses(currentRoute === item.href)

                  return (
                    <Link key={item.id} href={item.href}>
                      <a className={classes}>{item.title}</a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </Headroom>
      {/* {menuOpen && (
        <MobileMenu routes={headerRoutes} onClose={() => setMenuOpen(false)} />
      )} */}
    </>
  )
}

export default Header
