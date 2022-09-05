import clsx from "clsx"
import Link from "next/link"
import { useEffect, useState } from "react"
import headerRoutes from "~/config/headerRoutes"
import { Routes } from "~/model/Routes"
import { getIcon } from "../icons"
import { MobileMenu } from "../mobileMenu"
import { ThemeSwitch } from "../themeSwitch"

export interface HeaderProps {
  title: string
  pageNavigation?: {
    id: string
    title: string
    href: string
  }[]
}
const MenuIcon = getIcon("bars3")
const CloseIcon = getIcon("close")

const Header: React.FC<HeaderProps> = ({ title, pageNavigation }) => {
  const showPageNavigation = !!pageNavigation
  const [currentRoute, setCurrentRoute] = useState<string>(Routes.Home)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const routes = headerRoutes.filter(route => route.href !== currentRoute)

  useEffect(() => {
    if (typeof window !== undefined) {
      setCurrentRoute(window.location.pathname)
    }
  }, [])

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

  return (
    <>
      <div className={containerClasses}>
        <p className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-50 grow sm:grow-0">
          {title}
        </p>
        <div className="hidden sm:flex px-6 flex-row items-center gap-2 grow-0 sm:grow">
          {routes.map(route => (
            <Link key={route.id} href={route.href}>
              <a className="text-sm text-gray-700 dark:text-gray-50">
                {route.title}
              </a>
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
    </>
  )
}

export default Header
