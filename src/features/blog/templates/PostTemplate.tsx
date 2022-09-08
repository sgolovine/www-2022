import clsx from "clsx"
import dayjs from "dayjs"
import { getIcon } from "~/components/icons"
import { BlogPost, Snippet } from "~/model/Post"

interface Props {
  meta: BlogPost | Snippet
}

const formatDate = (date: string): string => {
  return dayjs(date).format("MMM DD")
}

const ArrowUpRight = getIcon("arrowUpRight")

const shareButtonClasses = clsx(
  "border",
  "border-gray-200",
  "dark:border-slate-600",
  "flex",
  "flex-row",
  "items-center",
  "gap-2",
  "px-2",
  "py-1",
  "rounded-md",
  "drop-shadow-md",
  "bg-white",
  "text-gray-800",
  "hover:bg-gray-100",
  "active:bg-gray-200",
  "dark:bg-slate-900",
  "dark:text-gray-200",
  "hover:dark:text-white",
  "hover:dark:bg-slate-700",
  "active:dark:text-white",
  "active:dark:bg-slate-800"
)

const PostTemplate: React.FC<Props> = ({ meta }) => {
  const isSnippet = meta.type === "snippet"

  const renderPost = (meta: BlogPost) => {
    return (
      <div>
        <p className="text-xs font-medium uppercase text-center text-gray-700 dark:text-gray-200">
          {meta.category}
        </p>
        <p className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 py-2">
          {meta.title}
        </p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <p className="text-xs font-bold text-gray-700 dark:text-gray-200">
              Sunny Golovine
            </p>
            <p className="text-xs font-bold text-gray-700 dark:text-gray-200">
              {formatDate(meta.date)}
            </p>
          </div>
          <div>
            <button className={shareButtonClasses}>
              <p>Share</p>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderSnippet = (meta: Snippet) => {
    return (
      <div>
        <p>Render Snippet</p>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto">
      {isSnippet
        ? renderSnippet(meta as Snippet)
        : renderPost(meta as BlogPost)}
    </div>
  )
}

export default PostTemplate
