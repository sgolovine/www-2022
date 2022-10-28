import axios from "axios"
import { Endpoints } from "~/config/endpoints"

type Body = Record<"name" | "email" | "subject" | "message", string>

type Return = Promise<{
  statusCode: number
  message: string
}>

export async function sendMessage(body: Body): Return {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve({
      statusCode: 200,
      message: "Mock Success!",
    })
  }

  const resp = await axios.post(Endpoints.SendEmail, body)

  return {
    statusCode: resp?.data?.statusCode,
    message: resp?.data?.message,
  }
}
