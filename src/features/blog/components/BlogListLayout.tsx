import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const BlogListLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-xl mx-auto grid grid-cols-1 gap-5">{children}</div>
  )
}

export default BlogListLayout
