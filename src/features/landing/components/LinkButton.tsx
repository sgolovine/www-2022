import { AllIcons, getIcon } from "~/components/icons"

interface LinkButtonProps {
  title: string
  icon: AllIcons
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, icon }) => {
  const IconComponent = getIcon(icon)
  return (
    <div className="border rounded-lg p-4 flex flex-row items-center">
      <span className="text-gray-700 dark:text-gray-50">
        <IconComponent />
      </span>
      <p className="ml-4 font-medium text-gray-900 dark:text-gray-50">
        {title}
      </p>
    </div>
  )
}

export default LinkButton
