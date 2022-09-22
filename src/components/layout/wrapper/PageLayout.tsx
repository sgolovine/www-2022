import { ReactNode } from "react"
import { HeaderRoute, Routes } from "~/model/Routes"
import HeaderWrapper from "../header/HeaderWrapper"
import BaseLayout from "./BaseLayout"

interface LayoutProps {
  children: ReactNode
  pageLinks?: HeaderRoute[]
  // This allows slug pages to manually set which
  // Link in teh header is active.
  overrideCurrentRoute?: Routes
}

const PageLayout: React.FC<LayoutProps> = ({
  children,
  pageLinks,
  overrideCurrentRoute,
}) => (
  <BaseLayout hideThemeToggle>
    <HeaderWrapper
      overrideCurrentRoute={overrideCurrentRoute}
      pageLinks={pageLinks}
    />
    <div className="p-4">{children}</div>
  </BaseLayout>
)

export default PageLayout
