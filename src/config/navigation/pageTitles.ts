import { StaticRoutes } from "~/model/Routes"
import labels from "~/labels.json"

type PageTitles = {
  [K in StaticRoutes]: string
}

const pageTitles: PageTitles = {
  [StaticRoutes.Blog]: labels.pageTitles.blog,
  [StaticRoutes.BlogSnippets]: labels.pageTitles.snippets,
  [StaticRoutes.Contact]: labels.pageTitles.contactMe,
  [StaticRoutes.Home]: labels.pageTitles.home,
  [StaticRoutes.Resume]: labels.pageTitles.resume,
  [StaticRoutes.ResumeDownloadDoc]: labels.pageTitles.downloadDoc,
  [StaticRoutes.ResumeDownloadPdf]: labels.pageTitles.downloadPdf,
  [StaticRoutes.Projects]: labels.pageTitles.work,
  [StaticRoutes.Apps]: labels.pageTitles.apps,
  [StaticRoutes.Guestbook]: labels.pageTitles.guestbook,
}

export default pageTitles
export type { PageTitles }
