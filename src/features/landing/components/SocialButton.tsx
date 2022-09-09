import clsx from "clsx"
import { getIcon } from "~/components/icons"
import { themeClasses } from "~/config/themeClasses"
import { Link } from "../model/Link"

const SocialButton: React.FC<Link> = ({ href, icon }) => {
  const Icon = getIcon(icon)

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className={clsx(themeClasses.iconSize, themeClasses.linkColor)} />
    </a>
  )
}

export default SocialButton
