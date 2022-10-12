import clsx from "clsx"

export const themeClasses = {
  container: clsx("max-w-xl", "mx-auto"),
  headerColor: clsx("text-gray-800", "dark:text-white"),
  textColor: clsx("text-gray-700", "dark:text-white"),
  detailTextColor: clsx("text-gray-500", "dark:text-gray-400"),
  buttonColor: clsx(
    "hover:bg-gray-100",
    "active:bg-gray-300",
    "active:dark:bg-slate-600",
    "hover:dark:bg-slate-800"
  ),
  linkColor: clsx(
    // Base
    "fill-gray-500",
    "text-gray-500",
    // Hover Light
    "hover:fill-blue-600",
    "hover:text-blue-600",
    // Active Light
    "active:fill-blue-500",
    "active:text-blue-500",
    // Dark
    "dark:fill-gray-100",
    "dark:text-gray-100",
    // Hover Dark
    "hover:dark:fill-gray-400",
    "hover:dark:text-gray-400",
    // Active Dark
    "active:dark:text-blue-300",
    "active:dark:fill-blue-300"
  ),
  iconSize: clsx("h-6", "w-6"),
  // This is the same as textColor. Adapted to use fill
  // Instead of text-color
  iconColor: clsx("fill-gray-700", "dark:fill-white"),
  iconColorStroke: clsx("stroke-gray-700", "dark:stroke-white"),
  transition: clsx("ease-in-out", "duration-100", "transition-all"),
}
