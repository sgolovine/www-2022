import WorkLayout from "./component/WorkLayout"
import WorkSection from "./component/WorkSection"
import labels from "~/labels.json"
import { WorkItem } from "./component/WorkItem"

const WorkPage = () => {
  return (
    <WorkLayout>
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
    </WorkLayout>
  )
}

export default WorkPage
