export enum Routes {
  Home = "/",
  Work = "/work",
  Blog = "/blog",
  BlogSnippets = "/blog/snippets",
  BlogCategories = "/blog/categories",
  Resume = "/resume",
  ResumeDownloadDoc = "/resume/download-doc",
  ResumeDownloadPdf = "/resume/download-pdf",
  Contact = "/contact",
}

export interface AppRoute {
  id: string
  title: string
  link: Routes
  // Should the route be shown in the header
  showOnHeader: boolean
  // Should the route be shown in the mobile menu header
  showOnMobileMenu: boolean
  // Should the route be shown on the homepage
  showOnHomepage: boolean
}

export interface HeaderRoute extends AppRoute {
  isActive?: boolean
  onClick?: (route: Routes) => void // this might not be required
}
