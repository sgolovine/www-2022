import { Link } from "../model/Link"
import labels from "~/labels.json"
import { Routes } from "~/model/Routes"

export const links: Link[] = [
  {
    id: "work",
    title: labels.landingPage.links.work,
    icon: "officeBuilding",
    href: Routes.Work,
  },
  {
    id: "resume",
    title: labels.landingPage.links.resume,
    icon: "documentText",
    href: Routes.Resume,
  },
  {
    id: "blog",
    title: labels.landingPage.links.blog,
    icon: "pencilSquare",
    href: Routes.Blog,
  },
  {
    id: "snippets",
    title: labels.landingPage.links.snippets,
    icon: "paperClip",
    href: Routes.BlogSnippets,
  },
]
