import { QuickLinks } from "~/config/quickLinks"
import { RedirectPageComponent } from "../components/RedirectPageComponent"

const Page = () => {
  return <RedirectPageComponent label="Venmo" redirectLink={QuickLinks.Venmo} />
}

export default Page
