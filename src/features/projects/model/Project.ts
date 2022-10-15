export interface Project {
  id: string
  name: string
  url?: string
  description?: string
  startDate: string
  endDate: string
  github?: {
    url: string
    label: string
  }
  hide?: boolean
  // If true, create a link that allows
  // the user to navigate to -> /projects/[project-id]
  hasRoute?: boolean
}
