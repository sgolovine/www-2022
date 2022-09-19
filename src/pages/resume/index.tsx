import { PageLayout } from "~/components/layout"
import { ResumePage, pageNavigationConfig } from "~/features/resume"
import { AppPage, StaticProps } from "~/model/PageProps"
import labels from "~/labels.json"
import { ResumePageProps } from "~/features/resume/types/ResumePageProps"
import { getResume } from "~/services/getResume.node"
import { featureFlags } from "~/config/featureFlags"

const Page: AppPage<ResumePageProps> = props => {
  return <ResumePage {...props} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export const getStaticProps = async (): StaticProps<ResumePageProps> => {
  const resumeJSON = await getResume()
  return {
    props: {
      data: resumeJSON,
    },
  }
}

export default Page
