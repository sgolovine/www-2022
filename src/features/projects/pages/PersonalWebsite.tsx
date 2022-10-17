import { useRouter } from "next/router"
import { ProjectPageTemplate } from "../component/ProjectPageTemplate"
import { ProjectPageTemplateProps } from "../model/ProjectPageTemplateProps"

export type PersonalWebsiteProps = Omit<ProjectPageTemplateProps, "onGoBack">

const CrewsumPage: React.FC<PersonalWebsiteProps> = ({
  title,
  introduction,
  url,
  startDate,
  endDate,
  licenseType,
  techStack,
  screenshots,
  mdx,
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
      mdx={mdx}
    />
  )
}

export default CrewsumPage
