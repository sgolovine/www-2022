import clsx from "clsx"
import makeStyles from "./makeStyles"

interface TextAreaProps {
  id: string
  label: string
  value?: string
  hasError?: boolean
  errorMessage?: string
  placeholder?: string
  onChange?: (newValue: string) => void
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  value,
  onChange,
  hasError,
  placeholder,
  errorMessage,
}) => {
  const {
    formSectionClasses,
    formLabelClasses,
    formInputClasses,
    errorClasses,
  } = makeStyles()
  return (
    <span className={formSectionClasses}>
      <label className={formLabelClasses} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        required
        placeholder={placeholder}
        className={clsx(formInputClasses, "h-32", "resize-none")}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
      />
      {hasError && errorMessage && (
        <p className={errorClasses}>{errorMessage}</p>
      )}
    </span>
  )
}

export default TextArea
export type { TextAreaProps }
