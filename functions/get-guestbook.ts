import { Handler } from "@netlify/functions"
import axios from "axios"

const handler: Handler = async () => {
  if (!process.env.GITHUB_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "GITHUB_TOKEN missing" }),
    }
  }

  if (!process.env.GUESTBOOK_GIST_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "GUESTBOOK_GIST_ID missing" }),
    }
  }

  if (!process.env.GUESTBOOK_FILENAME) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "GUESTBOOK_FILENAME missing" }),
    }
  }

  const url = `https://api.github.com/gists/${process.env.GUESTBOOK_GIST_ID}`
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })

    const guestbookContent =
      res.data?.files?.[process.env.GUESTBOOK_FILENAME].content

    return {
      statusCode: 200,
      body: JSON.stringify({
        content: guestbookContent,
      }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error Fetching Guestbook",
      }),
    }
  }
}

export { handler }
