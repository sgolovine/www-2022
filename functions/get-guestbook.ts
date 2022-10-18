import { Handler } from "@netlify/functions"

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Placeholder for get guestbook.",
    }),
  }
}

export { handler }
