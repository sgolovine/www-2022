import { useEffect, useState } from "react"
import AppLogger from "@logger"
import * as EmailValidator from "email-validator"

const logger = new AppLogger({
  prefix: "useContactForm",
})

type FormKeys = "name" | "email" | "subject" | "message"

type FormState = Record<FormKeys, string>

type FormErrors = Record<FormKeys, boolean | null>

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  subject: "",
}

const initialFormErrorState: FormErrors = {
  name: null,
  email: null,
  message: null,
  subject: null,
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
    if (formErrors.name) {
      setFormErrors(prevState => ({
        ...prevState,
        name: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.name])

  useEffect(() => {
    if (formErrors.email) {
      setFormErrors(prevState => ({
        ...prevState,
        email: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.email])

  useEffect(() => {
    if (formErrors.subject) {
      setFormErrors(prevState => ({
        ...prevState,
        subject: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.subject])

  useEffect(() => {
    if (formErrors.message) {
      setFormErrors(prevState => ({
        ...prevState,
        name: false,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.message])

  const handleSubmit = () => {
    const isNameValid = validateText(form.name)
    const isSubjectValid = validateText(form.subject)
    const isEmailValid = validateEmail(form.email)
    const isMessageValid = validateText(form.message)
    if (isNameValid && isEmailValid && isMessageValid && isSubjectValid) {
    } else {
      logger.log("found form validation errors", formErrors)
      setFormErrors({
        name: !isNameValid,
        email: !isEmailValid,
        message: !isMessageValid,
        subject: !isSubjectValid,
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
