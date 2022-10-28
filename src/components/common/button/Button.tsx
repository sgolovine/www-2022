import { getIcon } from "~/components/icons"
import { makeStyles } from "./Button.classes"

interface ButtonProps {
  children: string
  onClick?: () => void
  sm?: boolean
  transparent?: boolean
  isActive?: boolean
  noBorder?: boolean
  loading?: boolean
}

const RefreshIcon = getIcon("refresh")

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  sm,
  transparent,
  isActive,
  noBorder,
  loading,
}) => {
  const classes = makeStyles({
    active: isActive,
    transparent,
    sm,
    noBorder,
  })
  const handleClick = () => !!onClick && onClick()

  return (
    <button className={classes} onClick={handleClick}>
      {loading ? <RefreshIcon className="h-4 w-4 animate-spin" /> : children}
    </button>
  )
}

export default Button
export type { ButtonProps }
