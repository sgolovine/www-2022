import AppsLayout from "~/components/apps/AppsLayout"
import {
  RecruiterSearchTool,
  config,
} from "~/features/apps/RecruiterSearchTool"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => <RecruiterSearchTool />

Page.getLayout = page => <AppsLayout header={config.title}>{page}</AppsLayout>

export default Page
