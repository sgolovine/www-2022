import clsx from "clsx"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useState } from "react"
import { themeClasses } from "~/config/themeClasses"
import { BlogPost } from "~/model/Post"

interface Props {
  meta: BlogPost
  preview?: string
}

const titleClasses = clsx(
  themeClasses.transition,
  themeClasses.headerColor,
  "text-lg",
  "font-medium"
)

const previewClasses = clsx(
  themeClasses.transition,
  themeClasses.textColor,
  "text-sm",
  "pt-0",
  "pb-2"
)

const dateClasses = clsx(
  themeClasses.transition,
  themeClasses.textColor,
  "text-xs",
  "font-medium",
  "uppercase"
)

const BlogItem: React.FC<Props> = ({ meta, preview }) => {
  const displayDate = dayjs(meta.date).format("MMM D")
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const router = useRouter()

  const containerClasses = clsx(
    themeClasses.buttonColor,
    themeClasses.transition,
    "p-2",
    "rounded-md"
  )

  const postPreviewText = !!meta.description
    ? meta.description
    : !!preview
    ? preview
    : false

  const shouldShowPostPreview = typeof postPreviewText === "string"

  const handleClick = () => {
    router.push(`/post/${meta.slug}`)
  }

  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <p className={titleClasses}>{meta.title}</p>
      {shouldShowPostPreview && (
        <p className={previewClasses}>{postPreviewText}...</p>
      )}
      {meta?.category ? (
        <p className={dateClasses}>
          {displayDate} | {meta.category}
        </p>
      ) : (
        <p className={dateClasses}>{displayDate}</p>
      )}
    </div>
  )
}

export default BlogItem
