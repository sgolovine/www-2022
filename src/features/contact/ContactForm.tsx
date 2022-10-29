import { useContactForm } from "./useContactForm"
import labels from "~/labels.json"
import { SubmitParams } from "./types/ContactForm"
import { Input, TextArea } from "~/components/common/form"
import { Button } from "~/components/common/button"

interface Props {
  onSubmit: (args: SubmitParams) => void
}

export const ContactForm: React.FC<Props> = ({ onSubmit }) => {
  const { state, setField, errors, handleSubmit, handleClear } = useContactForm(
    { cb: onSubmit }
  )

  return (
    <>
      <Input
        id="name"
        type="text"
        label={labels.contactPage.labels.name}
        value={state.name}
        onChange={value => setField("name", value)}
        hasError={errors.namePresent}
        errorMessage={labels.contactPage.errors.name}
      />

      <Input
        id="email"
        type="email"
        label={labels.contactPage.labels.email}
        value={state.email}
        onChange={value => setField("email", value)}
        hasError={errors.emailPresent || errors.emailValid}
        errorMessage={
          errors.emailPresent
            ? labels.contactPage.errors.emailMissing
            : labels.contactPage.errors.emailInvalid
        }
      />

      <Input
        id="subject"
        type="text"
        label={labels.contactPage.labels.subject}
        value={state.subject}
        onChange={value => setField("subject", value)}
        hasError={errors.subjectPresent}
        errorMessage={labels.contactPage.errors.subject}
      />

      <TextArea
        id="message"
        label={labels.contactPage.labels.message}
        value={state.message}
        onChange={value => setField("message", value)}
        hasError={errors.messagePresent}
        errorMessage={labels.contactPage.errors.message}
      />

      <span className="flex flex-row gap-4">
        <Button transparent onClick={handleSubmit}>
          {labels.contactPage.buttons.submit}
        </Button>
        <Button transparent noBorder onClick={handleClear}>
          {labels.contactPage.buttons.clear}
        </Button>
      </span>
    </>
  )
}
