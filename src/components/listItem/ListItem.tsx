import dayjs from "dayjs"
import { makeStyles } from "./ListItem.classes"

interface ListItemProps {
  title: string
  date?: string
  description?: string
  preview?: string
  category?: string
  onClick: () => void
}

const { containerClasses, titleClasses, previewClasses, dateClasses } =
  makeStyles()

const ListItem: React.FC<ListItemProps> = ({
  title,
  date,
  description,
  preview,
  category,
  onClick,
}) => {
  const displayDate = !!date ? dayjs(date).format("MMM D") : undefined

  const postPreviewText = !!description
    ? description
    : !!preview
    ? preview
    : false

  const shouldShowPostPreview = typeof postPreviewText === "string"

  const renderDateCategory = () => (
    <>
      {/* Case when both category and date are present */}
      {category && displayDate && (
        <p className={dateClasses}>
          {displayDate} | {category}
        </p>
      )}
      {/* Case when a category and no date is present */}
      {category && !displayDate && <p className={dateClasses}>{category}</p>}
      {/* Case when we have a date but no category */}
      {!category && displayDate && <p className={dateClasses}>{displayDate}</p>}
      {/* Final Case: Do not render date/category */}
    </>
  )

  return (
    <div className={containerClasses} onClick={onClick}>
      <p className={titleClasses}>{title}</p>
      {shouldShowPostPreview && (
        <p className={previewClasses}>{postPreviewText}...</p>
      )}
      {renderDateCategory()}
    </div>
  )
}

export default ListItem
