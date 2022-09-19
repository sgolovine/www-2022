import clsx from "clsx"
import { Transition } from "@headlessui/react"
import ThemeSwitch from "../themeSwitch/ThemeSwitch"
import { AppRoute, HeaderRoute } from "~/model/Routes"
import { Fragment } from "react"
import { IconButton } from "../../common/iconButton"

interface Props {
  routes: AppRoute[]
  onClose: () => void
  visible: boolean
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

const layout = clsx("absolute", "top-0", "bottom-0", "left-0", "right-0")
const start = clsx("-translate-x-full")
const end = clsx("translate-x-0")

const transitionClasses = {
  enter: clsx("transition", "ease-in-out", "duration-100", layout),
  enterFrom: clsx(start),
  enterTo: clsx(end),
  entered: clsx(layout),
  leave: clsx("transition", "ease-in-out", "duration-50"),
  leaveFrom: clsx(end),
  leaveTo: clsx(start),
}

const MobileMenu: React.FC<Props> = ({ routes, visible, onClose }) => {
  const handleClick = (route: HeaderRoute) => {
    if (route.onClick) {
      route.onClick(route.link)
    }
    onClose()
  }

  return (
    <Transition
      as={Fragment}
      show={visible}
      enter={transitionClasses.enter}
      enterFrom={transitionClasses.enterFrom}
      enterTo={transitionClasses.enterTo}
      entered={transitionClasses.entered}
      leave={transitionClasses.leave}
      leaveFrom={transitionClasses.leaveFrom}
      leaveTo={transitionClasses.leaveTo}
    >
      <div className="z-50 fixed h-full w-full bg-gray-100 dark:bg-slate-800 w-32 p-2">
        <div className="flex flex-row items-center justify-between p-4">
          <p className="text-2xl font-bold dark:text-gray-50">Menu</p>
          <IconButton icon="close" onClick={onClose} />
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
