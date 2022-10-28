import axios from "axios"

export async function getGuestbook() {
  return axios.get("/.netlify/functions/get-guestbook")
}
