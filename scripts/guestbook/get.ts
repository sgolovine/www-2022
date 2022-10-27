import axios from "axios"

// Before running this script. Create a `secrets.ts`
// file in this directory and export your PAT as
// GITHUB_TOKEN
import { GITHUB_TOKEN } from "./secrets"

// MAIN
;(async () => {
  try {
    const res = await axios.get(
      "https://api.github.com/gists/8086d7329fb0bf377805ab314afc0641",
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    )
    const guestbookFile = res.data?.files?.["guestbook.txt"]
    console.log("Your Guestbook:\n", guestbookFile.content)
  } catch (e: any) {
    throw e?.message
  }
})()
