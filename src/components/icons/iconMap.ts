import { IconProps } from "~/model/IconProps"
import { GithubIcon } from "./brand/Github"
import { InstagramIcon } from "./brand/Instagram"
import { LinkedIn } from "./brand/LinkedIn"
import { WhatsApp } from "./brand/WhatsApp"
import { DocumentText } from "./hero/DocumentText"
import { Envelope } from "./hero/Envelope"
import { Newspaper } from "./hero/Newspaper"
import { OfficeBuilding } from "./hero/OfficeBuilding"
import { PaperClip } from "./hero/PaperClip"
import { PencilSquare } from "./hero/PencilSquare"

const allIcons = {
  github: GithubIcon,
  linkedin: LinkedIn,
  instagram: InstagramIcon,
  whatsApp: WhatsApp,
  envelope: Envelope,
  newspaper: Newspaper,
  officeBuilding: OfficeBuilding,
  paperClip: PaperClip,
  pencilSquare: PencilSquare,
  documentText: DocumentText,
}

export type AllIcons = keyof typeof allIcons

export const getIcon = (icon: AllIcons): React.FC<IconProps> => {
  return allIcons[icon]
}
