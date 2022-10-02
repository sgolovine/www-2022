import type { ReactNode } from "react"
import FooterWrapper from "../footer/Footer.wrapper"

const BaseLayout: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">{children}</div>
      <div className="py-4">
        <FooterWrapper />
      </div>
    </div>
  )
}

export default BaseLayout
