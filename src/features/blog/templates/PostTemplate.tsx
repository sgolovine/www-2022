import clsx from "clsx"
import dayjs from "dayjs"
import { MDXRemote } from "next-mdx-remote"
import { useState } from "react"
import { getIcon } from "~/components/icons"
import { themeClasses } from "~/config/themeClasses"
import { BlogPost, Snippet } from "~/model/Post"

interface Props {
  meta: BlogPost | Snippet
  mdx: string
}

const TextIncreaseIcon = getIcon("textIncrease")
const TextDecreaseIcon = getIcon("textDecrease")

const formatDate = (date: string): string => {
  return dayjs(date).format("MMM DD")
}

const PostTemplate: React.FC<Props> = ({ meta, mdx }) => {
  const isSnippet = meta.type === "snippet"

  // 1: prose-sm
  // 2: prose-base (default)
  // 3: prose-lg
  // 4: prose-xl
  // 5: prose-2xl
  const [fontSize, setFontSize] = useState<number>(2)

  const handleFontSizeIncrease = () => {
    if (fontSize < 5) {
      setFontSize(previousFontSize => previousFontSize + 1)
    }
  }

  const handleFontSizeDecrease = () => {
    if (fontSize > 1) {
      setFontSize(previousFontSize => previousFontSize - 1)
    }
  }

  const proseClasses = clsx("prose", "dark:prose-invert", {
    "prose-sm": fontSize === 1,
    "prose-base": fontSize === 2,
    "prose-lg": fontSize === 3,
    "prose-xl": fontSize === 4,
    "prose-2xl": fontSize === 5,
  })

  const renderPost = (meta: BlogPost) => {
    return (
      <div>
        <div className="flex flex-row items-start justify-center pb-4">
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
        <div className="flex flex-row items-center justify-between pt-4">
          <div className="flex flex-col">
            <p className={clsx(themeClasses.textColor, "text-xs", "font-bold")}>
              Sunny Golovine
            </p>
            <p className={clsx(themeClasses.textColor, "text-xs", "font-bold")}>
              {formatDate(meta.date)}
            </p>
          </div>
          <div className="flex flex-row items-end gap-3">
            <button
              className={clsx(themeClasses.buttonColor, "p-1", "rounded-md")}
              onClick={handleFontSizeDecrease}
            >
              <TextDecreaseIcon
                className={clsx("h-5 w-5", themeClasses.iconColor)}
              />
            </button>
            <button
              className={clsx(themeClasses.buttonColor, "p-1", "rounded-md")}
              onClick={handleFontSizeIncrease}
            >
              <TextIncreaseIcon
                className={clsx("h-5 w-5", themeClasses.iconColor)}
              />
            </button>
          </div>
        </div>
        <hr className="my-4" />
        {/* Main Content */}
        <div className={proseClasses}>
          <MDXRemote compiledSource={mdx} />
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
