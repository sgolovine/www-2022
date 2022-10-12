import { PageLayout } from "~/components/layout"
import { ProjectPage } from "~/features/projects"
import { AppPage, StaticProps } from "~/model/PageProps"
import { PageSEO } from "~/components/common/PageSEO"
import labels from "~/labels.json"
import { ProjectPageProps } from "~/features/projects/model/ProjectPageProps"
import { getProjects } from "~/services/getProjects.node"

const Page: AppPage<ProjectPageProps> = ({ projects }) => {
  return <ProjectPage projects={projects} />
}

Page.getLayout = page => (
  <>
    <PageSEO
      title={`${labels.seo.defaultTitle} | ${labels.pageTitles.work}`}
      description={labels.seo.defaultDescription}
    />
    <PageLayout>{page}</PageLayout>
  </>
)

export async function getStaticProps(): StaticProps<ProjectPageProps> {
  const projects = await getProjects()
  return {
    props: {
      projects,
    },
  }
}

export default Page
