import { PageLayout } from "~/components/layout"
import { WorkPage } from "~/features/work"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => {
  return <WorkPage />
}
Page.getLayout = page => (
  <PageLayout header={{ title: "Work" }}>{page}</PageLayout>
)

export default Page
