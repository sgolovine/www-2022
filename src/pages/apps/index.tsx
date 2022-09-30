import AppsLayout from "~/components/apps/AppsLayout"
import { AppPage } from "~/model/PageProps"
import labels from "~/labels.json"

const Page: AppPage = () => {
  return (
    <div>
      <p>{labels.apps.landing.intro}</p>
    </div>
  )
}

Page.getLayout = page => (
  <AppsLayout header={labels.apps.landing.header}>{page}</AppsLayout>
)

export default Page
