import { AllIcons } from "~/components/icons"

export interface CrewsumPageProps {
  title: string
  introduction: string
  licenseType: "proprietary" | "open-source"
  url: string
  startDate: string
  endDate: string
  techStack: {
    [category: string]: {
      title: string
      icon: AllIcons
      description: string
    }[]
  }
}
