import { RedirectPageComponent } from "../components/RedirectPageComponent"
import { QuickLinks } from "~/config/quickLinks"

const Page = () => {
  return (
    <RedirectPageComponent
      label="Contact Info"
      redirectLink={QuickLinks.Contact}
    />
  )
}

export default Page
