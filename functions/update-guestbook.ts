/**
 * TODO:
 *
 * 1. Add some mechanism to filter out bad language.
 * 2. Add mechanism to filter out any injection attempt.
 * 3. General sanitization of the body for things like zalgo text.
 * 3. Get the current gist.
 * 4. Update said gist using this new message.
 * 5. Upload gist back to GH.
 */

import { Handler } from "@netlify/functions"
import { clean as filterZalgoText } from "unzalgo"
import axios from "axios"
import Filter from "bad-words"
import DOMPurify from "dompurify"

interface Body {
  message: string
  author: string
}

function createContent(message: string, author: string): string {
  const filter = new Filter()
  const unzalgoMessageText = filterZalgoText(message)
  const unzalgoAuthorText = filterZalgoText(author)
  const cleanMessageText = filter.clean(unzalgoMessageText)
  const cleanAuthorText = filter.clean(unzalgoAuthorText)
  const purifiedMessage = DOMPurify.sanitize(cleanMessageText)
  const purifiedAuthor = DOMPurify.sanitize(cleanAuthorText)

  return purifiedMessage + "\n\n" + `- ${purifiedAuthor}`
}

function appendToGuestbook(currentGuestbook: string, newMessage: string) {
  return newMessage + "\n\n---\n\n" + currentGuestbook
}

const handler: Handler = async event => {
  let guestbookContent: string | null = null

  if (!process.env.GITHUB_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "GITHUB_TOKEN missing",
      }),
    }
  }

  if (!process.env.GUESTBOOK_GIST_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "GUESTBOOK_GIST_ID missing",
      }),
    }
  }

  if (!process.env.GUESTBOOK_FILENAME) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "GUESTBOOK_FILENAME missing" }),
    }
  }

  const url = `https://api.github.com/gists/${process.env.GUESTBOOK_GIST_ID}`

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Body Not Found",
      }),
    }
  }

  const body: Body = JSON.parse(event.body)

  if (!body.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Message Not Found",
      }),
    }
  }

  if (!body.author) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Author Missing",
      }),
    }
  }

  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  })

  try {
    const res = await axiosInstance.get(url)

    guestbookContent = res.data?.files?.[process.env.GUESTBOOK_FILENAME].content
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error Fetching Guestbook",
      }),
    }
  }

  if (!guestbookContent) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error fetching current guestbook",
      }),
    }
  }

  // Create new content
  const content = createContent(body.message, body.author)

  const newGuestbook = appendToGuestbook(guestbookContent, content)

  try {
    await axiosInstance.patch(url, {
      files: {
        [process.env.GUESTBOOK_FILENAME]: {
          content: newGuestbook,
        },
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully updated the guestbook",
      }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error updating guestbook",
      }),
    }
  }
}

export { handler }
