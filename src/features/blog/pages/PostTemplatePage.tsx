import clsx from "clsx"
import { getIcon } from "~/components/icons"
import { themeClasses } from "~/config/themeClasses"
import { MarkdownRenderer } from "../components/MarkdownRenderer"
import PostImage from "../components/PostImage"
import { formatDate } from "../helpers/formatDate"
import { useFontSize } from "../hooks/useFontSize"
import { PostTemplatePageProps } from "../types/PostTemplatePageProps"
import labels from "~/labels.json"
import BlogItem from "../components/BlogItem"

const TextIncreaseIcon = getIcon("textIncrease")
const TextDecreaseIcon = getIcon("textDecrease")

const PostTemplatePage: React.FC<PostTemplatePageProps> = ({
  meta,
  mdx,
  recentPosts,
}) => {
  const { handleFontSizeDecrease, handleFontSizeIncrease, proseClasses } =
    useFontSize()

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-row items-start justify-center pb-4">
        <p
          className={clsx(
            themeClasses.textColor,
            "text-sm",
            "font-bold",
            "uppercase"
          )}
        >
          {meta.category ?? labels.blog.post}
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
          <p className={clsx(themeClasses.textColor, "text-sm", "font-bold")}>
            {labels.blog.author}
          </p>
          <p className={clsx(themeClasses.textColor, "text-sm", "font-bold")}>
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
      {meta.headerImage ? (
        <div className="py-4">
          <PostImage
            src={meta.headerImage}
            alt={labels.blog.template.defaultHeaderAlt}
          />
        </div>
      ) : (
        <hr className="my-4" />
      )}
      {/* Main Content */}
      <MarkdownRenderer classes={proseClasses} mdx={mdx} />
      {recentPosts && recentPosts.length > 0 && (
        <>
          <hr className="my-4" />
          <div>
            <h2
              className={clsx(
                themeClasses.headerColor,
                "text-xl",
                "text-center",
                "font-bold"
              )}
            >
              {labels.blog.template.otherPostsHeader}
            </h2>
            <p className={clsx(themeClasses.textColor, "text-center")}>
              {labels.blog.template.otherPostsDescription}
            </p>
            <div className="flex flex-col gap-5 py-5">
              {recentPosts.map(post => {
                return (
                  <BlogItem
                    hideAdditionalData
                    key={post.relativePath}
                    meta={post.postMetadata}
                  />
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PostTemplatePage
