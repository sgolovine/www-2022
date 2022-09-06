import { getIcon } from "~/components/icons"
import { Link } from "../model/Link"

const SocialButton: React.FC<Link> = ({ href, icon }) => {
  const Icon = getIcon(icon)

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="h-6 w-6 fill-gray-500 hover:fill-gray-400 hover:dark:fill-gray-400 active:fill-blue-500 active:dark:fill-blue-300 dark:fill-gray-100" />
    </a>
  )
}

export default SocialButton
