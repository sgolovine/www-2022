import WorkSection from "./component/WorkSection"
import labels from "~/labels.json"
import { WorkItem } from "./component/WorkItem"
import { themeClasses } from "~/config/themeClasses"

const WorkPage = () => {
  return (
    <div className={themeClasses.container}>
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
    </div>
  )
}

export default WorkPage
