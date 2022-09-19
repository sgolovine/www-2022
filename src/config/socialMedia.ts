import { AllIcons } from "~/components/icons"
import labels from "~/labels.json"

enum SocialMediaKeys {
  Email = "email",
  Instagram = "instagram",
  Linkedin = "linkedin",
  Github = "github",
  WhatsApp = "whatsApp",
}

type SocialMediaConfig = {
  [Key in SocialMediaKeys]: {
    label: string
    href: string
    icon: AllIcons
    enabled: boolean
  }
}

const socialMediaConfig: SocialMediaConfig = {
  [SocialMediaKeys.Email]: {
    label: labels.socialMedia.email,
    href: "mailto:hey@sunny.gg",
    icon: "envelope",
    enabled: true,
  },
  [SocialMediaKeys.Instagram]: {
    label: labels.socialMedia.instagram,
    href: "https://instagram.com/sgolovine",
    icon: "instagram",
    enabled: true,
  },
  [SocialMediaKeys.Linkedin]: {
    label: labels.socialMedia.linkedin,
    href: "#",
    icon: "linkedin",
    enabled: true,
  },
  [SocialMediaKeys.Github]: {
    label: labels.socialMedia.github,
    href: "https://github.com/sgolovine",
    icon: "github",
    enabled: true,
  },
  [SocialMediaKeys.WhatsApp]: {
    label: labels.socialMedia.whatsApp,
    href: "#",
    icon: "whatsApp",
    enabled: true,
  },
}

export default socialMediaConfig
