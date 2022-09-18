import clsx from "clsx"
import { HeaderRoute } from "~/model/Routes"
import { IconButton } from "../common/iconButton"
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
  "hover:dark:border-amber-500",
  "active:border-blue-400",
  "active:text-gray-600",
  "active:dark:border-amber-600",
  "text-gray-900"
)

const MobileMenu: React.FC<Props> = ({ onClose, routes }) => {
  const handleClick = (route: HeaderRoute) => {
    if (route.onClick) {
      route.onClick(route.link)
    }
    onClose()
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white dark:bg-slate-900 z-50">
      <div className="flex flex-row items-start justify-between p-4">
        <p className="text-lg font-bold dark:text-gray-50">Menu</p>
        <div>
          <IconButton icon="close" onClick={onClose} />
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-5 p-4">
        {routes.map(route => (
          <div
            key={route.id}
            onClick={() => handleClick(route)}
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
