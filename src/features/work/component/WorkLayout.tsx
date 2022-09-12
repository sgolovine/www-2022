import { ReactNode } from "react"

const WorkLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="max-w-xl mx-auto">{children}</div>
}

export default WorkLayout
