import clsx from "clsx"
import { AllIcons, getIcon } from "~/components/icons"
import { themeClasses } from "~/config/themeClasses"

const SocialButton: React.FC<{ href: string; icon: AllIcons }> = ({
  href,
  icon,
}) => {
  const Icon = getIcon(icon)

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className={clsx(themeClasses.iconSize, themeClasses.linkColor)} />
    </a>
  )
}

export default SocialButton
