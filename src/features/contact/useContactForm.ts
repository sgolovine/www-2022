import { useEffect, useState } from "react"
import AppLogger from "@logger"
import * as EmailValidator from "email-validator"
import {
  FormErrors,
  FormKeys,
  FormState,
  SubmitParams,
} from "./types/ContactForm"

const logger = new AppLogger({
  prefix: "useContactForm",
})

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  subject: "",
}

const initialFormErrorState: FormErrors = {
  namePresent: false,
  emailPresent: false,
  emailValid: false,
  messagePresent: false,
  subjectPresent: false,
}

function validateText(input: string): boolean {
  const trimmedInput = input.trim()
  if (Boolean(trimmedInput)) {
    return true
  }
  return false
}

function validateEmail(input: string): boolean {
  return EmailValidator.validate(input)
}

export const useContactForm = ({
  cb,
}: {
  cb: (args: SubmitParams) => void
}) => {
  const [form, setForm] = useState<FormState>(initialState)
  const [formErrors, setFormErrors] = useState<FormErrors>(
    initialFormErrorState
  )

  useEffect(() => {
    if (formErrors.namePresent) {
      setFormErrors(prevState => ({
        ...prevState,
        namePresent: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.name])

  useEffect(() => {
    if (formErrors.emailPresent || formErrors.emailValid) {
      setFormErrors(prevState => ({
        ...prevState,
        emailPresent: false,
        emailValid: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.email])

  useEffect(() => {
    if (formErrors.subjectPresent) {
      setFormErrors(prevState => ({
        ...prevState,
        subjectPresent: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.subject])

  useEffect(() => {
    if (formErrors.messagePresent) {
      setFormErrors(prevState => ({
        ...prevState,
        messagePresent: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.message])

  const handleSubmit = () => {
    const isNameValid = validateText(form.name)
    const isSubjectValid = validateText(form.subject)
    // Check if we have an text present in the email input
    const isEmailPresent = validateText(form.email)
    // Check if we have a valid email address.
    const isEmailValid = validateEmail(form.email)
    const isMessageValid = validateText(form.message)
    if (isNameValid && isEmailValid && isMessageValid && isSubjectValid) {
      logger.log("executing form callback")
      logger.log("form:", form)
      // Callback Function
      cb({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      })
    } else {
      logger.log("found form validation errors", formErrors)
      setFormErrors({
        namePresent: !isNameValid,
        emailPresent: !isEmailPresent,
        emailValid: !isEmailValid,
        messagePresent: !isMessageValid,
        subjectPresent: !isSubjectValid,
      })
    }
  }

  const handleClear = () => {
    setForm(initialState)
    setFormErrors(initialFormErrorState)
  }

  const setField = (field: FormKeys, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [field]: value,
    }))
  }

  return {
    handleSubmit,
    handleClear,
    setField,
    state: form,
    errors: formErrors,
    setFormErrors,
  }
}
