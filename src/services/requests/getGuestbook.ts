import { Endpoints } from "~/config/endpoints"
import axios from "../axiosInstance"

export async function getGuestbook() {
  return axios.get(Endpoints.GetGuestbook)
}
