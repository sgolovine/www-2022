import clsx from "clsx"
import dayjs from "dayjs"
import { useState } from "react"
import { BlogPost, PostMap } from "~/model/Post"

interface Props {
  meta: BlogPost
  preview: string
}

const titleClasses = clsx(
  "text-lg",
  "font-medium",
  "text-gray-900",
  "dark:text-gray-200"
)

const previewClasses = clsx(
  "text-sm",
  "pt-0",
  "pb-2",
  "text-gray-700",
  "dark:text-gray-300"
)

const dateClasses = clsx(
  "text-xs",
  "font-medium",
  "uppercase",
  "text-gray-600",
  "dark:text-gray-400"
)

const BlogItem: React.FC<Props> = ({ meta, preview }) => {
  const displayDate = dayjs(meta.date).format("MMM D")
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const containerClasses = clsx("p-2", "rounded-md", {
    "bg-white": !isHovering,
    "bg-gray-100": isHovering,
    "dark:bg-slate-900": !isHovering,
    "dark:bg-slate-800": isHovering,
  })

  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p className={titleClasses}>{meta.title}</p>
      <p className={previewClasses}>{preview}...</p>
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
