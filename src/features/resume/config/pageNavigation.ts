import { HeaderRoute } from "~/model/HeaderRoute"
import labels from "~/labels.json"
import { Routes } from "~/model/Routes"

export const pageNavigationConfig: HeaderRoute[] = [
  {
    id: "download-pdf",
    title: labels.resume.downloadPDF,
    href: Routes.ResumeDownloadPdf,
  },
  {
    id: "download-doc",
    title: labels.resume.downloadDOC,
    href: Routes.ResumeDownloadDoc,
  },
]
