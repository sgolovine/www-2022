import { AppPage } from "~/model/PageProps"
import { LandingPage } from "~/features/landing"
import { BaseLayout } from "~/components/layout"

const Page: AppPage = () => <LandingPage />

Page.getLayout = page => <BaseLayout>{page}</BaseLayout>

export default Page
