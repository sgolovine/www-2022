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
}
