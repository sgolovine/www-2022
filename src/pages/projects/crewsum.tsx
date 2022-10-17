import { PageLayout } from "~/components/layout"
import { CrewsumPage, CrewsumPageProps } from "~/features/projects"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getProject } from "~/services/node/getProject.node"

const Page: AppPage<CrewsumPageProps> = props => {
  return <CrewsumPage {...props} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export const getStaticProps = async (): StaticProps<CrewsumPageProps> => {
  const project = await getProject<CrewsumPageProps>("crewsum.json", "crewsum")

  return {
    props: {
      ...project,
    },
  }
}

export default Page
