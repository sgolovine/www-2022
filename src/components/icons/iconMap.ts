import { IconProps } from "~/model/IconProps"
import { GithubIcon } from "./brand/Github"
import { InstagramIcon } from "./brand/Instagram"
import { LinkedIn } from "./brand/LinkedIn"
import { WhatsApp } from "./brand/WhatsApp"
import ArrowLeft from "./hero/ArrowLeft"
import ArrowUpRight from "./hero/ArrowUpRight"
import Bars3 from "./hero/Bars3"
import Close from "./hero/Close"
import { DocumentText } from "./hero/DocumentText"
import { Envelope } from "./hero/Envelope"
import Moon from "./hero/Moon"
import { Newspaper } from "./hero/Newspaper"
import { OfficeBuilding } from "./hero/OfficeBuilding"
import { PaperClip } from "./hero/PaperClip"
import { PencilSquare } from "./hero/PencilSquare"
import Sun from "./hero/Sun"

const allIcons = {
  arrowUpRight: ArrowUpRight,
  arrowLeft: ArrowLeft,
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
  bars3: Bars3,
  close: Close,
  sun: Sun,
  moon: Moon,
}

export type AllIcons = keyof typeof allIcons

export const getIcon = (icon: AllIcons): React.FC<IconProps> => {
  return allIcons[icon]
}
