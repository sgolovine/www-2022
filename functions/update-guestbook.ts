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

interface Body {
  message: string
  author: string
}

const handler: Handler = async event => {
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

  const template = `${body.message}

  - ${body.author}

  ------
  `

  console.log(template)

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Success",
    }),
  }
}

export { handler }
