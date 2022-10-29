import clsx from "clsx"
import { AllIcons, getIcon } from "~/components/icons"
import { makeStyles } from "./IconButton.classes"

interface IconButtonProps {
  icon: AllIcons
  onClick?: () => void
  buttonClasses?: string
  iconClasses?: string
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  buttonClasses,
  iconClasses,
}) => {
  const classes = makeStyles()

  const IconComponent = getIcon(icon)

  return (
    <button
      onClick={() => onClick && onClick()}
      className={clsx(buttonClasses, classes.buttonClasses)}
    >
      <IconComponent className={clsx(iconClasses, classes.iconClasses)} />
    </button>
  )
}

export default IconButton
