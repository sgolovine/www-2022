import clsx from "clsx"
import dayjs from "dayjs"
import { themeClasses } from "~/config/themeClasses"
import { BlogPost, Snippet } from "~/model/Post"

interface Props {
  meta: BlogPost | Snippet
}

const formatDate = (date: string): string => {
  return dayjs(date).format("MMM DD")
}

const PostTemplate: React.FC<Props> = ({ meta }) => {
  const isSnippet = meta.type === "snippet"

  const renderPost = (meta: BlogPost) => {
    return (
      <div>
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col">
            <p className={clsx(themeClasses.textColor, "text-xs", "font-bold")}>
              Sunny Golovine
            </p>
            <p className={clsx(themeClasses.textColor, "text-xs", "font-bold")}>
              {formatDate(meta.date)}
            </p>
          </div>
          <p
            className={clsx(
              themeClasses.textColor,
              "text-xs",
              "font-bold",
              "uppercase"
            )}
          >
            {meta.category}
          </p>
        </div>
        <p
          className={clsx(
            themeClasses.headerColor,
            "text-xl",
            "font-bold",
            "text-center",
            "py-2"
          )}
        >
          {meta.title}
        </p>

        {meta.description && (
          <div>
            <p className={clsx(themeClasses.textColor, "text-center")}>
              {meta.description}
            </p>
          </div>
        )}
        <hr className="my-4" />
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
