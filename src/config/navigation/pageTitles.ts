import { Routes } from "~/model/Routes"
import labels from "~/labels.json"

type PageTitles = {
  [K in Routes]: string
}

const pageTitles: PageTitles = {
  [Routes.Blog]: labels.pageTitles.blog,
  [Routes.BlogSnippets]: labels.pageTitles.snippets,
  [Routes.Contact]: labels.pageTitles.contactMe,
  [Routes.Home]: labels.pageTitles.home,
  [Routes.Resume]: labels.pageTitles.resume,
  [Routes.ResumeDownloadDoc]: labels.pageTitles.downloadDoc,
  [Routes.ResumeDownloadPdf]: labels.pageTitles.downloadPdf,
  [Routes.Work]: labels.pageTitles.work,
}

export default pageTitles
export type { PageTitles }
