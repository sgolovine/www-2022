import { Handler } from "@netlify/functions"
import axios from "axios"

const handler: Handler = async () => {
  try {
    const res = await axios.get(
      "https://api.github.com/gists/8086d7329fb0bf377805ab314afc0641",
      {
        headers: {
          // TODO: Add bearer token
          Authorization: `Bearer someToken`,
        },
      }
    )
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error Fetching Guestbook",
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Placeholder for get guestbook.",
    }),
  }
}

export { handler }
