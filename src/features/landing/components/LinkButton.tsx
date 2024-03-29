import clsx from "clsx"
import Link from "next/link"
import { AllIcons, getIcon } from "~/components/icons"
import { themeClasses } from "~/config/themeClasses"

interface LinkButtonProps {
  title: string
  icon?: AllIcons
  href: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, icon, href = "#" }) => {
  // The `close` is a placeholder and should never occur
  // If the icon is not defined then this component
  // Will never be rendered.
  const IconComponent = getIcon(icon ?? "close")

  const containerClasses = clsx(
    themeClasses.transition,
    themeClasses.buttonColor,
    "border",
    "rounded-lg",
    "p-4",
    "flex",
    "flex-row",
    "items-center"
  )

  const textClasses = clsx(
    themeClasses.transition,
    themeClasses.textColor,
    "ml-4",
    "font-medium"
  )

  return (
    <Link href={href}>
      <div className={containerClasses}>
        {!!icon && (
          <span className="text-gray-700 dark:text-gray-50">
            <IconComponent className="h-6 w-6" />
          </span>
        )}
        <p className={textClasses}>{title}</p>
      </div>
    </Link>
  )
}

export default LinkButton
