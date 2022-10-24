import clsx from "clsx"

function makeStyles() {
  const notificationContainerBase = clsx(
    "px-4",
    "py-2",
    "mt-2",
    "mb-4",
    "rounded-lg",
    "drop-shadow-md",
    "text-gray-900",
    "text-lg",
    "font-medium"
  )

  const container = clsx("flex", "flex-col", "relative")

  const errorContainer = clsx(notificationContainerBase, "bg-red-500")

  const successContainer = clsx(
    notificationContainerBase,
    "bg-green-500",
    "mt-2"
  )

  const buttonContainer = clsx(
    "inline-flex",
    "flex-row",
    "items-center",
    "gap-5"
  )

  const loaderContainer = clsx(
    "absolute",
    "top-0",
    "bottom-0",
    "left-0",
    "right-0",
    "bg-tint-50",
    "rounded-lg",
    "flex",
    "flex-row",
    "items-center",
    "justify-center"
  )

  return {
    container,
    errorContainer,
    successContainer,
    buttonContainer,
    loaderContainer,
  }
}

export default makeStyles
