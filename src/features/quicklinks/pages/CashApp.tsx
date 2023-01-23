import { RedirectPageComponent } from "../components/RedirectPageComponent"
import { QuickLinks } from "~/config/quickLinks"

const Page = () => {
  return (
    <RedirectPageComponent label="CashApp" redirectLink={QuickLinks.CashApp} />
  )
}

export default Page
