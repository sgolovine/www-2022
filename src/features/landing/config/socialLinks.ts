import { socialMediaConfig } from "~/config/socialMedia"
import { Link } from "../model/Link"
import labels from "~/labels.json"

// We do not use the `title` property
// When rendering these links.
export const socialLinks: Link[] = [
  {
    id: "email",
    title: labels.landingPage.social.email,
    href: socialMediaConfig.email,
    icon: "envelope",
  },
  {
    id: "ig",
    title: labels.landingPage.social.instagram,
    icon: "instagram",
    href: socialMediaConfig.instagram,
  },
  {
    id: "linkedin",
    title: labels.landingPage.social.linkedin,
    icon: "linkedin",
    href: socialMediaConfig.linkedin,
  },
  {
    id: "gh",
    title: labels.landingPage.social.github,
    icon: "github",
    href: socialMediaConfig.github,
  },
  {
    id: "wa",
    title: labels.landingPage.social.whatsApp,
    icon: "whatsApp",
    href: socialMediaConfig.whatsApp,
  },
]
