export interface SubmitParams {
  name: string
  email: string
  subject: string
  message: string
}

export type FormKeys = "name" | "email" | "subject" | "message"

export type FormErrorKeys =
  | "namePresent"
  | "emailPresent"
  | "emailValid"
  | "subjectPresent"
  | "messagePresent"

export type FormState = Record<FormKeys, string>

export type FormErrors = Record<FormErrorKeys, boolean>
