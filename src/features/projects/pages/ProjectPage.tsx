import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import pageTitles from "~/config/navigation/pageTitles"
import { StaticRoutes } from "~/model/Routes"
import { ProjectItem } from "../component/ProjectItem"
import { ProjectPageProps } from "../model/ProjectPageProps"

const ProjectPage: React.FC<ProjectPageProps> = ({ projects }) => {
  return (
    <PageContainer>
      <PageHeader>{pageTitles[StaticRoutes.Projects]}</PageHeader>
      <div className="flex flex-col gap-5">
        {projects.map(project => {
          return <ProjectItem key={project.id} {...project} />
        })}
      </div>
    </PageContainer>
  )
}

export default ProjectPage
