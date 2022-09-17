import clsx from "clsx"

interface ButtonProps {
  children: string
  onClick?: () => void
  sm?: boolean
  transparent?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, sm }) => {
  const handleClick = () => !!onClick && onClick()

  const classes = clsx("bg-blue-500", "dark:bg-blue-300")

  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
export type { ButtonProps }
