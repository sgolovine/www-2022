import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"

export function makeStyles({ showPageNav }: { showPageNav: boolean }) {
  const containerClasses = clsx(
    // height
    "h-16",

    // background and border
    "bg-white",
    "dark:bg-slate-900",
    "border-b",
    "border-gray-100",
    "dark:border-slate-700",

    // shadow
    "drop-shadow-sm",

    // inside layout
    "px-4",
    "flex",
    "flex-row",
    "items-center",
    "justify-between"
  )

  const linksContainer = clsx(
    "hidden",
    "md:flex",
    "flex-row",
    "items-center",
    "gap-3",
    "pr-5"
  )

  const themeSwitchContainer = clsx("hidden", "md:contents")

  const mobileMenuContainer = clsx("contents", "md:hidden")

  const mobileTitleContainer = clsx("contents", "md:hidden")

  const mobileTitleText = clsx(themeClasses.textColor, "font-medium")

  const pageNavigationContainer = clsx({
    hidden: !showPageNav,
    contents: showPageNav,
  })

  const pageNav = clsx(
    "h-10",
    "border-b",
    "border-gray-100",
    "dark:border-slate-700",
    "flex",
    "flex-row",
    "items-center",
    "justify-center"
  )

  return {
    containerClasses,
    linksContainer,
    themeSwitchContainer,
    mobileMenuContainer,
    mobileTitleContainer,
    mobileTitleText,
    pageNavigationContainer,
    pageNav,
  }
}
