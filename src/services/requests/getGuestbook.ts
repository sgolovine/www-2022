import axios from "axios"
import { Endpoints } from "~/config/endpoints"

export async function getGuestbook() {
  return axios.get(Endpoints.GetGuestbook)
}
