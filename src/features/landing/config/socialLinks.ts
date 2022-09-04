import { socialMediaConfig } from "~/config/socialMedia"
import { Link } from "../model/Link"
import { strings } from "./strings"

// We do not use the `title` property
// When rendering these links.
export const socialLinks: Link[] = [
  {
    id: "email",
    title: "Email",
    href: socialMediaConfig.email,
    icon: "envelope",
  },
  {
    id: "ig",
    title: strings.social.instagram,
    icon: "instagram",
    href: socialMediaConfig.instagram,
  },
  {
    id: "linkedin",
    title: strings.social.linkedin,
    icon: "linkedin",
    href: socialMediaConfig.linkedin,
  },
  {
    id: "gh",
    title: strings.social.github,
    icon: "github",
    href: socialMediaConfig.github,
  },
  {
    id: "wa",
    title: strings.social.whatsApp,
    icon: "whatsApp",
    href: socialMediaConfig.whatsApp,
  },
]
