import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import { formatDate } from "../helpers/formatDate"
import labels from "~/labels.json"
import { getIcon } from "~/components/icons"

interface Props {
  type: "post" | "snippet"
  title: string
  onFontSizeIncrease: () => void
  onFontSizeDecrease: () => void
  description?: string
  category?: string
  date?: string
}

const TextIncreaseIcon = getIcon("textIncrease")
const TextDecreaseIcon = getIcon("textDecrease")

export const TemplateHeader: React.FC<Props> = ({
  type,
  title,
  onFontSizeIncrease,
  onFontSizeDecrease,
  category,
  description,
  date,
}) => {
  return (
    <>
      <div className="flex flex-row items-start justify-center pb-4">
        {type && (
          <p
            className={clsx(
              themeClasses.textColor,
              "text-sm",
              "font-bold",
              "uppercase"
            )}
          >
            {type === "post"
              ? category ?? labels.blog.post
              : labels.blog.snippet}
          </p>
        )}
      </div>
      <p
        className={clsx(
          themeClasses.headerColor,
          "text-3xl",
          "font-bold",
          "text-left",
          "py-2"
        )}
      >
        {title}
      </p>

      {description && (
        <div>
          <p
            className={clsx(
              themeClasses.detailTextColor,
              "text-left",
              "italic"
            )}
          >
            {description}
          </p>
        </div>
      )}
      <div className="flex flex-row items-center justify-between pt-4">
        <div className="flex flex-col">
          <p className={clsx(themeClasses.textColor, "text-xs", "font-medium")}>
            {labels.blog.author}
          </p>
          {date && (
            <p
              className={clsx(themeClasses.textColor, "text-xs", "font-light")}
            >
              {formatDate(date)}
            </p>
          )}
        </div>
        <div className="flex flex-row items-end gap-3">
          <button
            className={clsx(themeClasses.buttonColor, "p-1", "rounded-md")}
            onClick={onFontSizeDecrease}
          >
            <TextDecreaseIcon
              className={clsx("h-5 w-5", themeClasses.iconColor)}
            />
          </button>
          <button
            className={clsx(themeClasses.buttonColor, "p-1", "rounded-md")}
            onClick={onFontSizeIncrease}
          >
            <TextIncreaseIcon
              className={clsx("h-5 w-5", themeClasses.iconColor)}
            />
          </button>
        </div>
      </div>
    </>
  )
}
