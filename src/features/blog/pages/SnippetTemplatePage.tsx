import clsx from "clsx"
import { MDXRemote } from "next-mdx-remote"
import dynamic from "next/dynamic"
import { getIcon } from "~/components/icons"
import { themeClasses } from "~/config/themeClasses"
import { MarkdownRenderer } from "../components/MarkdownRenderer"
import PostImage from "../components/PostImage"
import { useFontSize } from "../hooks/useFontSize"
import { SnippetTemplatePageProps } from "../types/SnippetTemplatePageProps"

const TextIncreaseIcon = getIcon("textIncrease")
const TextDecreaseIcon = getIcon("textDecrease")

const SnippetTemplatePage: React.FC<SnippetTemplatePageProps> = ({
  meta,
  mdx,
}) => {
  const { handleFontSizeDecrease, handleFontSizeIncrease, proseClasses } =
    useFontSize()

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex flex-row items-start justify-center pb-4">
        <p
          className={clsx(
            themeClasses.textColor,
            "text-xs",
            "font-bold",
            "uppercase"
          )}
        >
          Snippet
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
      <MarkdownRenderer classes={proseClasses} mdx={mdx} />
    </div>
  )
}

export default SnippetTemplatePage
