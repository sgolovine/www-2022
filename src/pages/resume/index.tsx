import { PageLayout } from "~/components/layout"
import { ResumePage } from "~/features/resume"
import { AppPage, StaticProps } from "~/model/PageProps"
import { ResumePageProps } from "~/features/resume/types/ResumePageProps"
import { getResume } from "~/services/getResume.node"

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
