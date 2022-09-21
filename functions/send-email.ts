import { Handler } from "@netlify/functions"
import { setApiKey, send } from "@sendgrid/mail"

const handler: Handler = async event => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Body not found.",
      }),
    }
  }

  const body = JSON.parse(event.body)

  if (!body.name) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Name field missing",
      }),
    }
  }

  if (!body.email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Email field missing",
      }),
    }
  }

  if (!body.subject) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Subject field missing",
      }),
    }
  }

  if (!body.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Message field missing",
      }),
    }
  }

  // Check if we have an api key for sendgrid
  if (!process.env.SENDGRID_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Sendgrid API key not found.",
      }),
    }
  }

  // Set the api key and catch any errors that might occur.
  try {
    setApiKey(process.env.SENDGRID_API_KEY)
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error setting Sendgrid API key.",
      }),
    }
  }

  // Create a composed message
  const composedMessage = {
    to: process.env.REPLY_TO,
    from: `noreply@sunny.gg`,
    subject: `[sunny.gg] New Contact Form Submission`,
    text: `
        Someone sent you a message from sunny.gg

        Name:
        ----------------
        ${body.name}
        
        Email:
        ----------------
        ${body.email}

        Subject:
        ----------------
        ${body.subject}

        Message:
        ----------------
        ${body.message}
      `,
  }

  const resp = await send(composedMessage)
  const isSuccessfulResponse =
    resp[0].statusCode >= 200 || resp[0].statusCode <= 299

  return {
    statusCode: resp[0].statusCode,
    body: JSON.stringify({
      message: isSuccessfulResponse
        ? "Successfully sent message"
        : "Error sending message",
      details: resp[0].body,
    }),
  }
}

export { handler }
