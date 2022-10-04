import AppsLayout from "~/components/apps/AppsLayout"
import { AppPage } from "~/model/PageProps"
import labels from "~/labels.json"

const Page: AppPage = () => {
  return (
    <div>
      <p>{labels.apps.template.intro}</p>
    </div>
  )
}

Page.getLayout = page => (
  <AppsLayout
    appName={labels.apps.template.header}
    appDescription={labels.apps.template.intro}
  >
    {page}
  </AppsLayout>
)

export default Page
