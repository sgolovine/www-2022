import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import { useContactForm } from "./useContactForm"
import makeStyles from "./ContactForm.classes"
import labels from "~/labels.json"

interface Props {}

enum FieldIds {
  name = "name",
  email = "email",
  subject = "subject",
  message = "message",
}

export const ContactForm: React.FC<Props> = ({}) => {
  const contactForm = useContactForm()

  const {
    formSectionClasses,
    formLabelClasses,
    formInputClasses,
    formButtonClasses,
    errorClasses,
  } = makeStyles()

  return (
    <>
      <span className={formSectionClasses}>
        <label className={formLabelClasses} htmlFor={FieldIds.name}>
          {labels.contactPage.labels.name}
        </label>
        <input
          className={formInputClasses}
          id={FieldIds.name}
          type="text"
          required
          value={contactForm.state.name}
          onChange={e => contactForm.setField("name", e.target.value)}
        />
        {contactForm.errors.namePresent && (
          <p className={errorClasses}>{labels.contactPage.errors.name}</p>
        )}
      </span>
      <span className={formSectionClasses}>
        <label className={formLabelClasses} htmlFor={FieldIds.email}>
          {labels.contactPage.labels.email}
        </label>
        <input
          id={FieldIds.email}
          type="email"
          required
          className={formInputClasses}
          value={contactForm.state.email}
          onChange={e => contactForm.setField("email", e.target.value)}
        />
        {contactForm.errors.emailValid && !contactForm.errors.emailPresent && (
          <p className={errorClasses}>
            {labels.contactPage.errors.emailInvalid}
          </p>
        )}
        {contactForm.errors.emailPresent && (
          <p className={errorClasses}>
            {labels.contactPage.errors.emailMissing}
          </p>
        )}
      </span>

      <span className={formSectionClasses}>
        <label className={formLabelClasses} htmlFor={FieldIds.subject}>
          {labels.contactPage.labels.subject}
        </label>
        <input
          id={FieldIds.subject}
          type="text"
          required
          className={formInputClasses}
          value={contactForm.state.subject}
          onChange={e => contactForm.setField("subject", e.target.value)}
        />
        {contactForm.errors.subjectPresent && (
          <p className={errorClasses}>{labels.contactPage.errors.subject}</p>
        )}
      </span>

      <span className={formSectionClasses}>
        <label className={formLabelClasses} htmlFor={FieldIds.message}>
          {labels.contactPage.labels.message}
        </label>
        <textarea
          id={FieldIds.message}
          required
          className={clsx(formInputClasses, "h-32", "resize-none")}
          value={contactForm.state.message}
          onChange={e => contactForm.setField("message", e.target.value)}
        />
        {contactForm.errors.messagePresent && (
          <p className={errorClasses}>{labels.contactPage.errors.message}</p>
        )}
      </span>
      <span className="flex flex-row gap-4">
        <button className={formButtonClasses} onClick={contactForm.handleClear}>
          <p className={themeClasses.textColor}>
            {labels.contactPage.buttons.clear}
          </p>
        </button>
        <button
          className={formButtonClasses}
          onClick={contactForm.handleSubmit}
        >
          <p className={themeClasses.textColor}>
            {labels.contactPage.buttons.submit}
          </p>
        </button>
      </span>
    </>
  )
}
