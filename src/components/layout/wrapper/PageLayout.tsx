import { ReactNode } from "react"
import { HeaderRoute } from "~/model/Routes"
import HeaderWrapper from "../header/HeaderWrapper"
import BaseLayout from "./BaseLayout"

interface LayoutProps {
  children: ReactNode
  pageLinks?: HeaderRoute[]
}

const PageLayout: React.FC<LayoutProps> = ({ children, pageLinks }) => (
  <BaseLayout hideThemeToggle>
    <HeaderWrapper pageLinks={pageLinks} />
    <div className="p-4">{children}</div>
  </BaseLayout>
)

export default PageLayout
