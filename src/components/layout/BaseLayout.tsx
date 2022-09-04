import type { ReactNode } from "react"
import { ThemeSwitch } from "../ThemeSwitch"

const BaseLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <ThemeSwitch />
      <div>{children}</div>
    </div>
  )
}

export default BaseLayout
