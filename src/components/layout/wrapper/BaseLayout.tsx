import type { ReactNode } from "react"
import ThemeSwitch from "../themeSwitch/ThemeSwitch"

const BaseLayout: React.FC<{
  children: ReactNode
  hideThemeToggle?: boolean
}> = ({ children, hideThemeToggle }) => {
  return (
    <div>
      {!hideThemeToggle && (
        <span className="absolute top-4 right-4">
          <ThemeSwitch />
        </span>
      )}
      <div>{children}</div>
    </div>
  )
}

export default BaseLayout
