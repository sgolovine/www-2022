import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import { MarkdownRenderer } from "../components/MarkdownRenderer"
import PostImage from "../components/PostImage"
import { useFontSize } from "../hooks/useFontSize"
import { PostTemplatePageProps } from "../types/PostTemplatePageProps"
import labels from "~/labels.json"
import { TemplateHeader } from "../components/TemplateHeader"
import { ListItem } from "~/components/listItem"
import { useRouter } from "next/router"
import { Divider } from "../components/Divider"
import Link from "next/link"
import { features } from "~/config/features"

const PostTemplatePage: React.FC<PostTemplatePageProps> = ({
  meta,
  mdx,
  recentPosts,
}) => {
  const { handleFontSizeDecrease, handleFontSizeIncrease, proseClasses } =
    useFontSize()

  const router = useRouter()

  return (
    <>
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
          <div className="pt-4">
            <PostImage
              src={meta.headerImage}
              alt={labels.blog.template.defaultHeaderAlt}
            />
            <Divider />
          </div>
        ) : (
          <Divider />
        )}
        {/* Main Content */}
        <MarkdownRenderer classes={proseClasses} mdx={mdx} />
        {recentPosts && recentPosts.length > 0 && (
          <>
            <Divider />
            <div>
              <h2
                className={clsx(
                  themeClasses.headerColor,
                  "text-xl",
                  "font-bold",
                  "text-center"
                )}
              >
                {labels.blog.template.otherPostsHeader}
              </h2>
              <p className={clsx(themeClasses.detailTextColor, "text-center")}>
                {labels.blog.template.otherPostsDescription}
              </p>

              <div className="flex flex-col gap-5 py-5">
                {recentPosts.map(post => {
                  return (
                    <ListItem
                      key={post.relativePath}
                      title={post.postMetadata.title}
                      category={post.postMetadata.category}
                      date={post.postMetadata.date}
                      onClick={() =>
                        router.push(`/post/${post.postMetadata.slug}`)
                      }
                    />
                  )
                })}
              </div>
              {features.showGuestbook && (
                <Link href="/guestbook">
                  <a className={clsx(themeClasses.detailTextColor, "mt-2")}>
                    Sign My Guestbook!
                  </a>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default PostTemplatePage
