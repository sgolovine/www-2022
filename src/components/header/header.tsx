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
  title?: string
  pageNavigation?: HeaderRoute[]
  showBackArrow?: boolean
}
const MenuIcon = getIcon("bars3")
const CloseIcon = getIcon("close")
const ArrowLeft = getIcon("arrowLeft")

const Header: React.FC<HeaderProps> = ({
  title,
  pageNavigation,
  showBackArrow,
}) => {
  const router = useRouter()
  const showPageNavigation = !!pageNavigation
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { pathname: currentRoute } = useRouter()

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

  const handleGoBack = () => {
    router.back()
  }

  return (
    <>
      <div className={containerClasses}>
        <span className="grow sm:grow-0">
          {showBackArrow && (
            <span className="flex flex-row items-center text-gray-800 hover:text-gray-600 dark:text-gray-50 hover:dark:text-gray-500 active:text-gray-900 active:dark:text-gray-200">
              <button onClick={handleGoBack}>
                <ArrowLeft className="h-6 w-6" />
              </button>
            </span>
          )}
          {title && (
            <p className="text-lg sm:hidden font-bold text-gray-800 dark:text-gray-50">
              {title}
            </p>
          )}
        </span>
        <div className={headerLinkContainerClasses}>
          {headerRoutes.map(route => {
            const isActive = route.href === currentRoute
            return (
              <Link key={route.id} href={route.href}>
                <a
                  className={clsx(linkClasses, {
                    "text-blue-500": isActive,
                    "font-medium": isActive,
                  })}
                >
                  {route.title}
                </a>
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
      {menuOpen && (
        <MobileMenu routes={headerRoutes} onClose={() => setMenuOpen(false)} />
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
