import { ReactNode } from "react"
import { HeaderRoute } from "~/model/Routes"
import { HeaderProps } from "../header"
import { HeaderWrapper } from "../headerv2"
import BaseLayout from "./BaseLayout"

interface LayoutProps {
  children: ReactNode
  header?: HeaderProps
  pageLinks?: HeaderRoute[]
}

const PageLayout: React.FC<LayoutProps> = ({ children, pageLinks }) => (
  <BaseLayout hideThemeToggle>
    <HeaderWrapper pageLinks={pageLinks} />
    <div className="p-4">{children}</div>
  </BaseLayout>
)

export default PageLayout
