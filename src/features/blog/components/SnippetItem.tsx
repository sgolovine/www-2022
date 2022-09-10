import clsx from "clsx"
import { useRouter } from "next/router"
import { themeClasses } from "~/config/themeClasses"
import { Snippet } from "~/model/Post"

interface Props {
  meta: Snippet
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

const SnippetItem: React.FC<Props> = ({ meta, preview }) => {
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
    router.push(`/snippet/${meta.slug}`)
  }

  return (
    <div className={containerClasses} onClick={handleClick}>
      <p className={titleClasses}>{meta.title}</p>
      {shouldShowPostPreview && (
        <p className={previewClasses}>{postPreviewText}...</p>
      )}
    </div>
  )
}

export default SnippetItem
