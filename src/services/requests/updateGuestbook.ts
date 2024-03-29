import axios from "../axiosInstance"
import { Endpoints } from "~/config/endpoints"

export async function updateGuestbook({
  message,
  author,
}: {
  message: string
  author: string
}) {
  return axios.post(Endpoints.UpdateGuestbook, {
    message,
    author,
  })
}
