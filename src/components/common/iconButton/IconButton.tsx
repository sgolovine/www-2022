import { AllIcons, getIcon } from "~/components/icons"
import { makeStyles } from "./IconButton.classes"

interface IconButtonProps {
  icon: AllIcons
  onClick?: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  const classes = makeStyles()

  const IconComponent = getIcon(icon)

  return (
    <button
      onClick={() => onClick && onClick()}
      className={classes.buttonClasses}
    >
      <IconComponent className={classes.iconClasses} />
    </button>
  )
}

export default IconButton
