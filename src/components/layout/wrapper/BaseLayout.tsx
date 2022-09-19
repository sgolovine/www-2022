import type { ReactNode } from "react"
import FooterWrapper from "../footer/Footer.wrapper"
import ThemeSwitch from "../themeSwitch/ThemeSwitch"

const BaseLayout: React.FC<{
  children: ReactNode
  hideThemeToggle?: boolean
}> = ({ children, hideThemeToggle }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideThemeToggle && (
        <span className="absolute top-4 right-4">
          <ThemeSwitch />
        </span>
      )}
      <div className="grow">{children}</div>
      <div className="py-4">
        <FooterWrapper />
      </div>
    </div>
  )
}

export default BaseLayout
