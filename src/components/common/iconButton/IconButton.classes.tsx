import clsx from "clsx"

export function makeStyles() {
  const buttonClasses = clsx(
    "rounded-full",
    "p-2",
    "hover:bg-gray-200",
    "active:bg-gray-100",
    "dark:hover:bg-slate-700",
    "dark:active:bg-slate-800"
  )
  const iconClasses = clsx("h-6", "w-6", {
    "dark:text-gray-200": true,
    "text-gray-800": true,
  })

  return {
    buttonClasses,
    iconClasses,
  }
}
