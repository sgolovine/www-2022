import { QuickLinks } from "~/config/quickLinks"
import { RedirectPageComponent } from "../components/RedirectPageComponent"

const Page = () => {
  return (
    <RedirectPageComponent
      label="Instagram"
      redirectLink={QuickLinks.Instagram}
    />
  )
}

export default Page
