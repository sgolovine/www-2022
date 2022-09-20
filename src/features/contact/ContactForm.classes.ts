import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"

function makeStyles() {
  const formSectionClasses = clsx("flex", "flex-col", "pb-4")
  const formLabelClasses = clsx("text-sm", "font-bold", themeClasses.textColor)
  const formInputClasses = clsx(
    themeClasses.textColor,
    "border",
    "dark:border-slate-700",
    "text-lg",
    "py-1",
    "px-2",
    "bg-gray-100",
    "dark:bg-slate-800"
  )

  const formButtonClasses = clsx(
    themeClasses.buttonColor,
    "py-2",
    "px-6",
    "border",
    "dark:border-slate-700",
    "rounded-lg"
  )

  const errorClasses = clsx("text-red-500", "font-medium", "text-sm")

  return {
    formSectionClasses,
    formLabelClasses,
    formInputClasses,
    formButtonClasses,
    errorClasses,
  }
}

export default makeStyles
