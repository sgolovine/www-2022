import { AllIcons } from "~/components/icons"

export enum LicenseTypes {
  Proprietary = "proprietary",
  OpenSource = "open-source",
}

export interface ProjectPageTemplateProps {
  title: string
  introduction: string
  licenseType: LicenseTypes
  url: string
  startDate: string
  endDate: string
  techStack: {
    [category: string]: {
      title: string
      icon: AllIcons
      description: string
      color: string
    }[]
  }
  screenshots: string[]
  onGoBack: () => void
}
