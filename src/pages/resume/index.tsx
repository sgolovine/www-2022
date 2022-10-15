import { PageLayout } from "~/components/layout"
import { ResumePage } from "~/features/resume"
import { AppPage, StaticProps } from "~/model/PageProps"
import { ResumePageProps } from "~/features/resume/types/ResumePageProps"
import { getResume } from "~/services/node/getResume.node"
import { PageSEO } from "~/components/common/PageSEO"
import labels from "~/labels.json"

const Page: AppPage<ResumePageProps> = props => {
  return <ResumePage {...props} />
}

Page.getLayout = page => (
  <>
    <PageSEO
      title={`${labels.seo.defaultTitle} | ${labels.pageTitles.resume}`}
      description={labels.seo.defaultDescription}
    />
    <PageLayout>{page}</PageLayout>
  </>
)

export const getStaticProps = async (): StaticProps<ResumePageProps> => {
  const resumeJSON = await getResume()
  return {
    props: {
      data: resumeJSON,
    },
  }
}

export default Page
