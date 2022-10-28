import axios from "axios"

export async function updateGuestbook({
  message,
  author,
}: {
  message: string
  author: string
}) {
  return axios.post("/.netlify/functions/update-guestbook", {
    message,
    author,
  })
}
