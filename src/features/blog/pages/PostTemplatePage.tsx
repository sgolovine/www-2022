import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import { MarkdownRenderer } from "../components/MarkdownRenderer"
import PostImage from "../components/PostImage"
import { useFontSize } from "../hooks/useFontSize"
import { PostTemplatePageProps } from "../types/PostTemplatePageProps"
import labels from "~/labels.json"
import BlogItem from "../components/BlogItem"
import { TemplateHeader } from "../components/TemplateHeader"

const PostTemplatePage: React.FC<PostTemplatePageProps> = ({
  meta,
  mdx,
  recentPosts,
}) => {
  const { handleFontSizeDecrease, handleFontSizeIncrease, proseClasses } =
    useFontSize()

  return (
    <div className="max-w-2xl mx-auto">
      <TemplateHeader
        type="post"
        title={meta.title}
        onFontSizeDecrease={handleFontSizeDecrease}
        onFontSizeIncrease={handleFontSizeIncrease}
        description={meta.description}
        category={meta.category}
        date={meta.date}
      />
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
