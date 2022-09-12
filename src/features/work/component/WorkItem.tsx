import clsx from "clsx"
import { useState } from "react"
import { getIcon } from "~/components/icons"
import { themeClasses } from "~/config/themeClasses"

interface Props {
  title: string
  description: string
  githubLink?: string
  webLink?: string
}

const GithubIcon = getIcon("github")
const GlobeIcon = getIcon("globe")
const CloseIcon = getIcon("minusCircle")
const OpenIcon = getIcon("plusCircle")

export const WorkItem: React.FC<Props> = ({
  title,
  description,
  githubLink,
  webLink,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={clsx(
        themeClasses.transition,
        "p-4",
        "rounded-lg",
        "bg-gray-50",
        "hover:bg-gray-100",
        "dark:bg-slate-800",
        "dark:hover:bg-slate-700"
        // "hover:shadow-lg"
      )}
    >
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-start gap-2">
          <button onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? (
              <CloseIcon
                className={clsx(
                  themeClasses.iconSize,
                  themeClasses.iconColorStroke
                )}
              />
            ) : (
              <OpenIcon
                className={clsx(
                  themeClasses.iconSize,
                  themeClasses.iconColorStroke
                )}
              />
            )}
          </button>
          <p
            className={clsx(themeClasses.headerColor, "text-xl", "font-medium")}
          >
            {title}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          {githubLink && (
            <a href={githubLink} className={themeClasses.linkColor}>
              <GithubIcon className={clsx(themeClasses.iconSize)} />
            </a>
          )}
          {webLink && (
            <a href={webLink} className={themeClasses.linkColor}>
              <GlobeIcon className={clsx(themeClasses.iconSize)} />
            </a>
          )}
        </div>
      </div>
      <div className={clsx({ hidden: !isOpen, block: isOpen }, "pt-4", "px-1")}>
        <p className={themeClasses.textColor}>{description}</p>
      </div>
    </div>
  )
}
