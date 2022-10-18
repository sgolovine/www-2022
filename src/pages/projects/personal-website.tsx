import { PageLayout } from "~/components/layout"
import {
  ProjectPageTemplate,
  ProjectPageTemplateProps,
} from "~/features/projects"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getProject } from "~/services/node/getProject.node"

const Page: AppPage<ProjectPageTemplateProps> = props => {
  return <ProjectPageTemplate {...props} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export const getStaticProps =
  async (): StaticProps<ProjectPageTemplateProps> => {
    const project = await getProject<ProjectPageTemplateProps>({
      id: "personal-website",
      configPath: "sunny-gg/config.json",
      introPath: "sunny-gg/intro.md",
    })

    return {
      props: {
        ...project,
      },
    }
  }

export default Page
