import clsx from "clsx"
import { makeStyles } from "./Button.classes"

interface ButtonProps {
  children: string
  onClick?: () => void
  sm?: boolean
  transparent?: boolean
  isActive?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  sm,
  transparent,
  isActive,
}) => {
  const classes = makeStyles({
    active: isActive,
    transparent,
    sm,
  })
  const handleClick = () => !!onClick && onClick()

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
export type { ButtonProps }
