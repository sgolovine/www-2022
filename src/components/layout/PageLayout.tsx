import { ReactNode } from "react"
import { Header, HeaderProps } from "../header"
import BaseLayout from "./BaseLayout"

const PageLayout: React.FC<{
  header?: HeaderProps
  children: ReactNode
}> = ({ header, children }) => (
  <BaseLayout hideThemeToggle>
    <Header {...header} />
    <div className="p-4">{children}</div>
  </BaseLayout>
)

export default PageLayout
