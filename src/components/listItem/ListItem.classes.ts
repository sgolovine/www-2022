import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"

export function makeStyles() {
  const containerClasses = clsx(
    themeClasses.buttonColor,
    themeClasses.transition,
    "p-2",
    "rounded-md"
  )

  const titleClasses = clsx(
    themeClasses.transition,
    themeClasses.headerColor,
    "text-lg",
    "font-medium"
  )

  const previewClasses = clsx(
    themeClasses.transition,
    themeClasses.textColor,
    "text-sm",
    "pt-0",
    "pb-2"
  )

  const dateClasses = clsx(
    themeClasses.transition,
    themeClasses.textColor,
    "text-sm",
    "font-medium",
    "uppercase"
  )

  return {
    containerClasses,
    titleClasses,
    previewClasses,
    dateClasses,
  }
}
