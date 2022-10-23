import makeStyles from "./makeStyles"

interface InputProps {
  id: string
  label: string
  value?: string
  onChange?: (newValue: string) => void
  hasError?: boolean
  errorMessage?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  id,
  hasError,
  errorMessage,
  value,
  onChange,
  label,
  placeholder,
}) => {
  const {
    formSectionClasses,
    formLabelClasses,
    formInputClasses,
    errorClasses,
  } = makeStyles()

  const showError = hasError && errorMessage

  return (
    <span className={formSectionClasses}>
      <label className={formLabelClasses} htmlFor={id}>
        {label}
      </label>
      <input
        className={formInputClasses}
        id={id}
        type="text"
        required
        value={value}
        placeholder={placeholder}
        onChange={e => onChange && onChange(e.target.value)}
      />
      {showError && <p className={errorClasses}>{errorMessage}</p>}
    </span>
  )
}

export default Input
export type { InputProps }
