import clsx from "clsx"

export const themeClasses = {
  headerColor: clsx("text-gray-800", "dark:text-white"),
  textColor: clsx("text-gray-700", "dark:text-white"),
  buttonColor: clsx(
    "hover:bg-gray-100",
    "active:bg-gray-300",
    "active:dark:bg-slate-600",
    "hover:dark:bg-slate-800"
  ),
  linkColor: clsx(
    "fill-gray-500",
    "hover:fill-gray-400",
    "hover:dark:fill-gray-400",
    "active:fill-blue-500",
    "active:dark:fill-blue-300",
    "dark:fill-gray-100"
  ),
  iconSize: clsx("h-6", "w-6"),
  // This is the same as textColor. Adapted to use fill
  // Instead of text-color
  iconColor: clsx("fill-gray-700", "dark:fill-white"),
  transition: clsx("ease-in-out", "duration-100", "transition-all"),
}
