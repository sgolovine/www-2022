import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { HeaderRoute } from "~/model/HeaderRoute"
import { getIcon } from "../icons"
import { ThemeSwitch } from "../themeSwitch"

const CloseIcon = getIcon("close")

interface Props {
  onClose: () => void
  routes: HeaderRoute[]
}

const linkClasses = clsx(
  "border-b-4",
  "border-transparent",
  "hover:border-blue-500",
  "hover:dark:border-gray-200",
  "active:border-blue-400",
  "active:text-gray-600",
  "active:dark:border-gray-400",
  "active:dark:text-gray-400",
  "text-gray-900"
)

const MobileMenu: React.FC<Props> = ({ onClose, routes }) => {
  const { push } = useRouter()

  const handleNavigate = (href: string) => {
    onClose()
    push(href)
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white dark:bg-slate-900">
      <div className="flex flex-row items-start justify-between p-4 border-b-2 dark:border-slate-800">
        <p className="text-lg font-bold dark:text-gray-50">Menu</p>
        <div>
          <button onClick={onClose} className="dark:text-white">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-5 p-4">
        {routes.map(route => (
          <div
            key={route.id}
            onClick={() => handleNavigate(route.href)}
            className={linkClasses}
          >
            <a className="text-2xl font-bold dark:text-white">{route.title}</a>
          </div>
        ))}
      </div>
      <span className="absolute bottom-4 left-4">
        <ThemeSwitch />
      </span>
    </div>
  )
}

export default MobileMenu
