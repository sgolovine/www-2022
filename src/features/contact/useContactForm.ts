import { useState } from "react"
import AppLogger from "@logger"
import * as EmailValidator from "email-validator"

const logger = new AppLogger({
  prefix: "useContactForm",
})

type FormKeys = "name" | "email" | "message"

type FormState = Record<FormKeys, string>

type FormErrors = Record<FormKeys, boolean>

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
}

const initialFormErrorState: FormErrors = {
  name: false,
  email: false,
  message: false,
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

  const handleSubmit = () => {
    const isNameValid = validateText(form.name)
    const isEmailValid = validateEmail(form.email)
    const isMessageValid = validateText(form.message)
    if (isNameValid && isEmailValid && isMessageValid) {
    } else {
      logger.log("found form validation errors", formErrors)
      setFormErrors({
        name: isNameValid,
        email: isEmailValid,
        message: isMessageValid,
      })
    }
  }

  const handleClear = () => {
    setForm(initialState)
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
  }
}
