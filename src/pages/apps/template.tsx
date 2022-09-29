import AppsLayout from "~/components/apps/AppsLayout"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => {
  return (
    <div>
      <p>Apps Template Page</p>
    </div>
  )
}

Page.getLayout = page => <AppsLayout header="Template">{page}</AppsLayout>

export default Page
