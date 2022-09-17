import { AllIcons, getIcon } from "~/components/icons"
import { makeStyles } from "./IconButton.classes"

interface IconButtonProps {
  icon: AllIcons
  additionalIconClasses?: string
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  const classes = makeStyles()

  const IconComponent = getIcon(icon)

  return (
    <button className={classes.buttonClasses}>
      <IconComponent className={classes.iconClasses} />
    </button>
  )
}

export default IconButton
