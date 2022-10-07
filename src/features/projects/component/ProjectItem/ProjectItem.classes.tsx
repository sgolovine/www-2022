import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"

export default function makeStyles() {
  return {
    container: clsx(
      "max-w-3xl",
      "bg-gray-100",
      "dark:bg-slate-800",
      "p-4",
      "rounded-lg",
      "drop-shadow-md"
    ),
    headerContainer: clsx(
      "flex",
      "flex-row",
      "items-center",
      "justify-between"
    ),
    headerText: clsx(themeClasses.headerColor, "text-xl", "font-medium"),
    headerDateContainer: clsx(
      "flex",
      "flex-row",
      "items-center",
      "justify-between",
      "gap-5"
    ),
    headerDateText: clsx(
      themeClasses.detailTextColor,
      "text-sm",
      "font-medium"
    ),
    urlText: clsx(themeClasses.linkColor, "text-sm"),
    descriptionText: clsx(themeClasses.textColor, "pt-2"),
  }
}
