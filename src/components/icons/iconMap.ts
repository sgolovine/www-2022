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
import { GlobeAlt } from "./hero/GlobeAlt"
import { MinusCircle } from "./hero/MinusCircle"
import Moon from "./hero/Moon"
import { Newspaper } from "./hero/Newspaper"
import { OfficeBuilding } from "./hero/OfficeBuilding"
import { PaperClip } from "./hero/PaperClip"
import { PencilSquare } from "./hero/PencilSquare"
import { PlusCircle } from "./hero/PlusCircle"
import Sun from "./hero/Sun"
import { Refresh } from "./material/Refresh"
import { TextDecrease } from "./material/TextDecrease"
import { TextIncrease } from "./material/TextIncrease"
import { Apps } from "./material/Apps"
import { Terminal } from "./material/Terminal"
import { Link } from "./material/Link"
import { Aws } from "./brand/Aws"
import { AwsDynamoDb } from "./brand/AwsDynamoDb"
import { AwsLambda } from "./brand/AwsLambda"
import { ReactIcon } from "./brand/React"
import { MaterialUI } from "./brand/MaterialUI"
import { Serverless } from "./brand/Serverless"
import Expand from "./hero/Expand"

export const allIcons = {
  aws: Aws,
  awsDynamoDb: AwsDynamoDb,
  awsLambda: AwsLambda,
  react: ReactIcon,
  materialUi: MaterialUI,
  apps: Apps,
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
  textIncrease: TextIncrease,
  textDecrease: TextDecrease,
  globe: GlobeAlt,
  plusCircle: PlusCircle,
  minusCircle: MinusCircle,
  refresh: Refresh,
  serverless: Serverless,
  terminal: Terminal,
  link: Link,
  expand: Expand,
}

export type AllIcons = keyof typeof allIcons

export const getIcon = (icon: AllIcons): React.FC<IconProps> => {
  return allIcons[icon]
}
