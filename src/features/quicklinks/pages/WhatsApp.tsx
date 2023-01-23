import { QuickLinks } from "~/config/quickLinks"
import { RedirectPageComponent } from "../components/RedirectPageComponent"

const Page = () => {
  return (
    <RedirectPageComponent
      label="WhatsApp"
      redirectLink={QuickLinks.WhatsApp}
    />
  )
}

export default Page
