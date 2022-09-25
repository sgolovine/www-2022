import { HeaderRoute } from "~/model/HeaderRoute"
import labels from "~/labels.json"
import { StaticRoutes } from "~/model/Routes"

export const pageNavigationConfig: HeaderRoute[] = [
  {
    id: "download-pdf",
    title: labels.resume.downloadPDF,
    href: StaticRoutes.ResumeDownloadPdf,
  },
  {
    id: "download-doc",
    title: labels.resume.downloadDOC,
    href: StaticRoutes.ResumeDownloadDoc,
  },
]
