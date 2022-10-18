import { useRouter } from "next/router"
import { ProjectPageTemplateProps } from "../../model/ProjectPageTemplateProps"
import ProjectPageTemplate from "./ProjectPageTemplate"

export type PersonalWebsiteProps = Omit<ProjectPageTemplateProps, "onGoBack">

const ProjectPageWrapper: React.FC<PersonalWebsiteProps> = ({
  title,
  introduction,
  url,
  startDate,
  endDate,
  licenseType,
  techStack,
  screenshots,
  mdx,
  github,
}) => {
  const router = useRouter()
  const handleGoBack = () => {
    router.back()
  }
  return (
    <ProjectPageTemplate
      title={title}
      introduction={introduction}
      url={url}
      startDate={startDate}
      endDate={endDate}
      licenseType={licenseType}
      techStack={techStack}
      onGoBack={handleGoBack}
      screenshots={screenshots}
      github={github}
      mdx={mdx}
    />
  )
}

export default ProjectPageWrapper
