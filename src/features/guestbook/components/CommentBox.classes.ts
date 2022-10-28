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
    "font-medium",
    "flex",
    "flex-row",
    "items-center",
    "justify-between"
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

  const errorButtonClasses = clsx(
    "hover:bg-red-300",
    "active:bg-red-400",
    "dark:bg-red-500",
    "dark:hover:bg-red-400",
    "dark:active:bg-red-600"
  )

  const successButtonClasses = clsx(
    "hover:bg-green-400",
    "active:bg-green-600",
    "dark:bg-green-500",
    "dark:hover:bg-green-400",
    "dark:active:bg-green-600"
  )

  return {
    container,
    errorContainer,
    successContainer,
    buttonContainer,
    errorButtonClasses,
    successButtonClasses,
  }
}

export default makeStyles
