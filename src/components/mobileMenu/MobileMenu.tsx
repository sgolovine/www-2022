import clsx from "clsx"
import { Transition } from "@headlessui/react"
import { ThemeSwitch } from "../themeSwitch"
import { HeaderRoute } from "~/model/Routes"

interface Props {
  routes: HeaderRoute[]
  visible: boolean
  onClose: () => void
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

const MobileMenu: React.FC<Props> = ({ onClose, routes, visible }) => {
  const handleClick = (route: HeaderRoute) => {
    if (route.onClick) {
      route.onClick(route.link)
    }
    onClose()
  }

  const delayVisible = setTimeout(() => {
    return visible
  }, 150)

  const outerContainerClasses = clsx({
    block: !delayVisible,
    absolute: delayVisible,
    "top-16": delayVisible,
    "bottom-0": delayVisible,
    "left-0": delayVisible,
    "right-0": delayVisible,
  })

  return (
    <Transition
      show={visible}
      enter="transition ease-in-out duration-150 h-full"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      entered="h-full"
      leave="transition ease-in-out duration-50"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="h-full bg-red-500 dark:bg-slate-900 z-50 border">
        <div className="flex flex-row items-start justify-between p-4">
          <p className="text-lg font-bold dark:text-gray-50">Menu</p>
        </div>
        <div className="pt-4 flex flex-col gap-5 p-4">
          {routes.map(route => (
            <div
              key={route.id}
              onClick={() => handleClick(route)}
              className={linkClasses}
            >
              <a className="text-2xl font-bold dark:text-white">
                {route.title}
              </a>
            </div>
          ))}
        </div>
        <span className="absolute bottom-4 left-4">
          <ThemeSwitch />
        </span>
      </div>
    </Transition>
  )
}

export default MobileMenu
