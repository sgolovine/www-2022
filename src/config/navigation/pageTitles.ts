import { Routes } from "~/model/Routes"

type PageTitles = {
  [K in Routes]: string
}

const pageTitles: PageTitles = {
  [Routes.Blog]: "Blog",
  [Routes.BlogCategories]: "Categories",
  [Routes.BlogSnippets]: "Snippets",
  [Routes.Contact]: "Contact Me",
  [Routes.Home]: "Home",
  [Routes.Resume]: "Resume",
  [Routes.ResumeDownloadDoc]: "Download DOC",
  [Routes.ResumeDownloadPdf]: "Download PDF",
  [Routes.Work]: "Work",
}

export default pageTitles
export type { PageTitles }
