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

export default Page
