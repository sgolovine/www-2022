import { Link } from "../model/Link"
import { strings } from "./strings"

export const links: Link[] = [
  {
    id: "work",
    title: strings.links.work,
    icon: "officeBuilding",
    href: "#",
  },
  {
    id: "resume",
    title: strings.links.resume,
    icon: "documentText",
    href: "#",
  },
  {
    id: "blog",
    title: strings.links.blog,
    icon: "pencilSquare",
    href: "#",
  },
  {
    id: "snippets",
    title: strings.links.snippets,
    icon: "paperClip",
    href: "#",
  },
]
