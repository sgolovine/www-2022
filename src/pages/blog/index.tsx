import { BaseLayout, PageLayout } from "~/components/layout"
import { featureFlags } from "~/config/featureFlags"
import { featureStubs } from "~/config/featureStubs"
import { BlogPage } from "~/features/blog"
import { useFeatureRedirect } from "~/hooks/useFeatureRedirect"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => {
  useFeatureRedirect({
    url: featureStubs.blog,
    flag: featureFlags.nativeBlogPage,
  })

  return <BlogPage />
}
Page.getLayout = page => (
  <PageLayout header={{ title: "Blog" }}>{page}</PageLayout>
)

export default Page