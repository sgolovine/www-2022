import Axios from "axios"

// Before running this script. Create a `secrets.ts`
// file in this directory and export your PAT as
// GITHUB_TOKEN
import { GITHUB_TOKEN } from "./secrets"

const GIST_ID = "8086d7329fb0bf377805ab314afc0641"

const UpdateMessage = "Hello world! I'm signing the guestbook!"
const UpdateAuthor = "Foobar123"

function createContent(message: string, author: string): string {
  return message + "\n" + `- ${author}`
}

function appendToGuestbook(currentGuestbook: string, newMessage: string) {
  return currentGuestbook + "\n---------------------\n" + newMessage
}
// MAIN
;(async () => {
  const instance = Axios.create({
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })

  let currentContent: string = ""

  // Fetch the current guestbook file.
  try {
    const res = await instance.get(`https://api.github.com/gists/${GIST_ID}`)
    currentContent = res.data?.files?.["guestbook.txt"]?.content
  } catch (e: any) {
    throw e?.message
  }

  // Create new content
  const content = createContent(UpdateMessage, UpdateAuthor)

  const newGuestbook = appendToGuestbook(currentContent, content)

  // Finally we update the gist with the new content
  try {
    const res = await instance.patch(
      `https://api.github.com/gists/${GIST_ID}`,
      {
        files: {
          "guestbook.txt": {
            content: newGuestbook,
          },
        },
      }
    )
    if (res.status >= 200 && res.status <= 299) {
      console.log("Successfully Updated Guestbook!")
    } else {
      console.log(
        `Updating guestbook resulted in a ${res.status} response status`
      )
    }
  } catch (e) {
    console.log("Failed to update guestbook")
  }
})()
