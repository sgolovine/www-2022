import { Link } from "../model/Link"
import labels from "~/labels.json"

export const links: Link[] = [
  {
    id: "work",
    title: labels.landingPage.links.work,
    icon: "officeBuilding",
    href: "/work",
  },
  {
    id: "resume",
    title: labels.landingPage.links.resume,
    icon: "documentText",
    href: "/resume",
  },
  {
    id: "blog",
    title: labels.landingPage.links.blog,
    icon: "pencilSquare",
    href: "/blog",
  },
  {
    id: "snippets",
    title: labels.landingPage.links.snippets,
    icon: "paperClip",
    href: "/snippets",
  },
]
