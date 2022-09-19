import clsx from "clsx"
import { ReactNode } from "react"
import { themeClasses } from "~/config/themeClasses"

interface Props {
  header: string
  description?: string
  children: ReactNode
}

const WorkSection: React.FC<Props> = ({ header, children, description }) => (
  <div className="pb-4">
    <h2 className={clsx(themeClasses.headerColor, "text-xl", "font-black")}>
      {header}
    </h2>
    {description && (
      <div className="py-2">
        <p className={themeClasses.textColor}>{description}</p>
      </div>
    )}
    <div className="py-4">{children}</div>
  </div>
)

export default WorkSection
