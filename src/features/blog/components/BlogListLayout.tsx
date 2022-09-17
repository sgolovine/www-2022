import clsx from "clsx"
import { ReactNode } from "react"
import { themeClasses } from "~/config/themeClasses"

interface Props {
  children: ReactNode
}

const BlogListLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={clsx(themeClasses.container, "grid", "grid-cols-1", "gap-5")}
    >
      {children}
    </div>
  )
}

export default BlogListLayout
