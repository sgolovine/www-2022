import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"
import { AllIcons, getIcon } from "~/components/icons"

interface LinkButtonProps {
  title: string
  icon: AllIcons
  href: string
}
const transition = clsx("ease-in-out", "duration-100", "transition-all")

const LinkButton: React.FC<LinkButtonProps> = ({ title, icon, href = "#" }) => {
  const IconComponent = getIcon(icon)
  const [hovering, setHovering] = useState<boolean>(false)

  const containerClasses = clsx(
    transition,
    "border",
    "rounded-lg",
    "p-4",
    "flex",
    "flex-row",
    "items-center",
    "hover:bg-gray-100",
    "hover:dark:bg-slate-800"
  )

  const textClasses = clsx(
    transition,
    "ml-4",
    "font-medium",
    "text-gray-900",
    "dark:text-gray-50",
    {
      "dark:text-white": hovering,
    }
  )

  return (
    <Link href={href}>
      <div
        className={containerClasses}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <span className="text-gray-700 dark:text-gray-50">
          <IconComponent />
        </span>
        <p className={textClasses}>{title}</p>
      </div>
    </Link>
  )
}

export default LinkButton
