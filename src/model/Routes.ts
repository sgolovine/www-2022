import { AllIcons } from "~/components/icons"

export enum StaticRoutes {
  Home = "/",
  Projects = "/projects",
  Blog = "/blog",
  BlogSnippets = "/blog/snippets",
  Resume = "/resume",
  ResumeDownloadDoc = "/resume/download-doc",
  ResumeDownloadPdf = "/resume/download-pdf",
  Contact = "/contactme",
  Apps = "/apps",
  Guestbook = "/guestbook",
}

export interface AppRoute {
  id: string
  title: string
  link: string | StaticRoutes
  // If set to false, will not show up anywhere.
  // Defaults to true.
  routeEnabled?: boolean
  // If set to false, is not shown in the header
  showOnHeader: boolean
  // Should the route be shown on the homepage
  showOnHomepage: boolean
  // Optional Icon
  icon?: AllIcons
}

export interface HeaderRoute extends AppRoute {
  isActive?: boolean
  onClick?: (route: string) => void // this might not be required
}
