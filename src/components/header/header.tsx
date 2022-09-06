import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import headerRoutes from "~/config/headerRoutes"
import { HeaderRoute } from "~/model/HeaderRoute"
import { getIcon } from "../icons"
import { MobileMenu } from "../mobileMenu"
import { ThemeSwitch } from "../themeSwitch"

export interface HeaderProps {
  title: string
  pageNavigation?: HeaderRoute[]
}
const MenuIcon = getIcon("bars3")
const CloseIcon = getIcon("close")

const Header: React.FC<HeaderProps> = ({ title, pageNavigation }) => {
  const showPageNavigation = !!pageNavigation
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { pathname: currentRoute } = useRouter()
  const routes = headerRoutes.filter(route => route.href !== currentRoute)

  const containerClasses = clsx(
    "w-full",
    "flex",
    "flex-row",
    "items-center",
    "justify-start",
    "border-b-2",
    "border-gray-200",
    "dark:border-slate-700",
    "pt-4",
    "px-4",
    {
      "pb-2": showPageNavigation,
      "pb-4": !showPageNavigation,
    }
  )

  const linkClasses = clsx(
    "text-sm",
    "text-gray-700",
    "dark:text-gray-50",
    "hover:text-blue-600",
    "hover:dark:text-gray-400",
    "active:text-blue-400",
    "active:dark:text-gray-200"
  )

  const sublinkClasses = clsx(
    "inline",
    "border-b-4",
    "border-transparent",
    "text-xs",
    "font-medium",
    "text-gray-700",
    "dark:text-gray-50",
    "hover:text-blue-600",
    "hover:dark:text-gray-400",
    "active:text-blue-400",
    "active:dark:text-gray-200"
  )

  return (
    <>
      <div className={containerClasses}>
        <p className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-50 grow sm:grow-0">
          {title}
        </p>
        <div className="hidden sm:flex px-6 flex-row items-center gap-4 grow-0 sm:grow">
          {routes.map(route => (
            <Link key={route.id} href={route.href}>
              <a className={linkClasses}>{route.title}</a>
            </Link>
          ))}
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
      {menuOpen && (
        <MobileMenu routes={routes} onClose={() => setMenuOpen(false)} />
      )}
      {showPageNavigation && (
        <div className="border-b-2 pt-2 px-2 border-gray-200 dark:border-slate-700">
          <div className="flex flex-row justify-center">
            <div className="inline-flex flex-row gap-5">
              {pageNavigation?.map(item => {
                return (
                  <Link key={item.id} href={item.href}>
                    <a
                      className={clsx(sublinkClasses, {
                        "border-blue-500": currentRoute === item.href,
                        "dark:border-gray-50": currentRoute === item.href,
                      })}
                    >
                      {item.title}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
