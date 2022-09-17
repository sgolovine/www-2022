import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import { useContactForm } from "./useContactForm"

interface Props {}

const formSectionClasses = clsx("flex", "flex-col", "pb-4")
const formLabelClasses = clsx("text-sm", "font-bold", themeClasses.textColor)
const formInputClasses = clsx(
  themeClasses.textColor,
  "border",
  "dark:border-slate-700",
  "text-lg",
  "py-1",
  "px-2",
  "bg-gray-100",
  "dark:bg-slate-800"
)

const formButtonClasses = clsx(
  themeClasses.buttonColor,
  "py-2",
  "px-6",
  "border",
  "dark:border-slate-700",
  "rounded-lg"
)

export const ContactForm: React.FC<Props> = ({}) => {
  const contactForm = useContactForm()

  return (
    <>
      <span className={formSectionClasses}>
        <label className={formLabelClasses} htmlFor="name">
          Your Name
        </label>
        <input
          className={formInputClasses}
          id="name"
          type="text"
          required
          value={contactForm.state.name}
          onChange={e => contactForm.setField("name", e.target.value)}
        />
      </span>
      <span className={formSectionClasses}>
        <label className={formLabelClasses} htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          required
          className={formInputClasses}
          value={contactForm.state.email}
          onChange={e => contactForm.setField("email", e.target.value)}
        />
      </span>
      <span className={formSectionClasses}>
        <label className={formLabelClasses} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          className={clsx(formInputClasses, "h-32", "resize-none")}
          value={contactForm.state.message}
          onChange={e => contactForm.setField("message", e.target.value)}
        />
      </span>
      <span className="flex flex-row gap-4">
        <button className={formButtonClasses} onClick={contactForm.handleClear}>
          <p className={themeClasses.textColor}>Clear</p>
        </button>
        <button
          className={formButtonClasses}
          onClick={contactForm.handleSubmit}
        >
          <p className={themeClasses.textColor}>Submit</p>
        </button>
      </span>
    </>
  )
}
