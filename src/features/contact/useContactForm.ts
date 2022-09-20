import { useEffect, useState } from "react"
import AppLogger from "@logger"
import * as EmailValidator from "email-validator"

const logger = new AppLogger({
  prefix: "useContactForm",
})

type FormKeys = "name" | "email" | "subject" | "message"

type FormState = Record<FormKeys, string>

type FormErrors = Record<
  | "namePresent"
  | "emailPresent"
  | "emailValid"
  | "subjectPresent"
  | "messagePresent",
  boolean
>

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

export const useContactForm = () => {
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
