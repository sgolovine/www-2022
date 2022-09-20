import { Transition } from "@headlessui/react"
import clsx from "clsx"
import { Fragment, useEffect, useState } from "react"
import { getIcon } from "../icons"
import { Button } from "./button"

interface Props {
  visible: boolean
  onCancel?: () => void
}

const flexCenter = clsx("flex", "flex-col", "items-center", "justify-center")

const RefreshIcon = getIcon("refresh")

export const Loader: React.FC<Props> = ({ visible, onCancel }) => {
  // We want the component to render in a non visible state and then animate
  // Into a visible state. In order to do this, we key the modal off this
  // Internal state and only show the loader once it has been loaded in as false.
  const [internalVisible, setInternalVisible] = useState<boolean>(false)
  useEffect(() => {
    setInternalVisible(visible)
  }, [visible])

  const containerClasses = clsx(
    flexCenter,
    "fixed",
    "bg-black/20",
    "dark:bg-white/20",
    "top-0",
    "bottom-0",
    "left-0",
    "right-0"
  )

  const loaderContainer = clsx(
    flexCenter,
    "bg-white",
    "dark:bg-gray-800",
    "rounded-lg",
    "drop-shadow-xl",
    "h-full w-full"
  )

  return (
    <Transition
      as={Fragment}
      show={internalVisible}
      enter="transition-opacity ease-in-out duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-100 delay-50"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={containerClasses}>
        <Transition.Child
          enter="transition-all ease-in-out duration-50 delay-150"
          enterFrom="opacity-0 h-12 w-12"
          enterTo="opacity-100 h-32 w-32"
          leave="transition-all ease-in-out duration-50"
          leaveFrom="opacity-100 h-32 w-32"
          leaveTo="opacity-0 h-12 w-12"
        >
          <div className={loaderContainer}>
            <RefreshIcon className="h-12 w-12 fill-gray-500 dark:fill-gray-600 animate-spin" />
          </div>
          {onCancel && (
            <div className={clsx("pt-4", flexCenter)}>
              <Button sm noBorder transparent onClick={onCancel}>
                Cancel
              </Button>
            </div>
          )}
        </Transition.Child>
      </div>
    </Transition>
  )
}
