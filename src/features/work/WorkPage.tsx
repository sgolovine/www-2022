import WorkSection from "./component/WorkSection"
import labels from "~/labels.json"
import { WorkItem } from "./component/WorkItem"
import { PageContainer } from "~/components/common/PageContainer"
import { PageHeader } from "~/components/common/PageHeader"
import pageTitles from "~/config/navigation/pageTitles"
import { StaticRoutes } from "~/model/Routes"

const WorkPage = () => {
  return (
    <PageContainer>
      <PageHeader>{pageTitles[StaticRoutes.Work]}</PageHeader>
      <WorkSection
        header={labels.workPage.professionalProjects.header}
        description={labels.workPage.professionalProjects.description}
      >
        <WorkItem title="Test Project" description="Test Project" />
      </WorkSection>
      <WorkSection
        header={labels.workPage.personalProjects.header}
        description={labels.workPage.personalProjects.description}
      >
        <WorkItem
          title="sunny.gg"
          description="My personal website"
          githubLink="https://github.com/sgolovine/sunny.gg"
        />
      </WorkSection>
    </PageContainer>
  )
}

export default WorkPage
