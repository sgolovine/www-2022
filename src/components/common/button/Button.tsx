import { makeStyles } from "./Button.classes"

interface ButtonProps {
  children: string
  onClick?: () => void
  sm?: boolean
  transparent?: boolean
  isActive?: boolean
  noBorder?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  sm,
  transparent,
  isActive,
  noBorder,
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
      {children}
    </button>
  )
}

export default Button
export type { ButtonProps }
