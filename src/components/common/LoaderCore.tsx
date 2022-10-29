import clsx from "clsx"
import { getIcon } from "../icons"

interface Props {}

const RefreshIcon = getIcon("refresh")

export const LoaderCore: React.FC<Props> = () => {
  const loaderContainer = clsx(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "bg-white",
    "dark:bg-gray-800",
    "rounded-lg",
    "drop-shadow-xl",
    "h-full w-full"
  )

  return (
    <div className={loaderContainer}>
      <RefreshIcon className="h-12 w-12 fill-gray-500 dark:fill-gray-600 animate-spin" />
    </div>
  )
}
