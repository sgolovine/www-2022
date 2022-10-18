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
  github?: {
    label: string
    url: string
  }
  techStack: {
    [category: string]: {
      title: string
      icon: AllIcons
      description: string
      color: string
    }[]
  }
  mdx: string | null
  screenshots: string[]
  onGoBack: () => void
}
