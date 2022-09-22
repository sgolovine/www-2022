import prompts from "prompts"
import AppLogger from "../logger"
import dayjs from "dayjs"
import { existsSync, writeFileSync } from "fs"

import path from "path"

const logger = new AppLogger({
  prefix: "CREATE POST",
})

const FM_DELIM = "---"
const NEWLINE = "\n"
const POSTS_DIRECTORY = path.resolve(__dirname, "../content/posts")
const SNIPPETS_DIRECTORY = path.resolve(__dirname, "../content/snippets")

const questions: prompts.PromptObject[] = [
  {
    type: "text",
    name: "title",
    message: "Post Title",
  },
  {
    type: "text",
    name: "slug",
    message: "Post Slug",
  },
  {
    type: "text",
    name: "fileName",
    message: "Post File Name",
  },
  {
    type: "select",
    name: "type",
    message: "Post Type",
    choices: [
      {
        title: "Blog Post",
        value: "blog",
      },
      {
        title: "Snippet",
        value: "snippet",
      },
    ],
  },
]

function createFrontmatter(title: string, slug: string, isSnippet: boolean) {
  let fmString: string = ""
  const timestamp = dayjs().format("MM/DD/YYYY")
  const fm = isSnippet
    ? [
        `title: ${title}`,
        `slug: ${slug}`,
        `# description:`,
        `# tags:`,
        `published: false`,
      ]
    : [
        `title: ${title}`,
        `slug: ${slug}`,
        `date: ${timestamp}`,
        `# description:`,
        `# category:`,
        `# tags:`,
        `# headerImage:`,
        `published: false`,
      ]

  fm.forEach(item => {
    if (fmString) {
      fmString = fmString + NEWLINE + item
    } else {
      fmString = item
    }
  })

  return fmString
}

function createPostString(frontMatter: string) {
  const starterString = `<!-- Start Writing Below -->${NEWLINE.repeat(
    2
  )}Hello World`
  const postString =
    FM_DELIM +
    NEWLINE +
    frontMatter +
    NEWLINE +
    FM_DELIM +
    NEWLINE.repeat(2) +
    starterString

  return postString
}

async function main() {
  try {
    const responses = await prompts(questions)
    const isSnippet = responses.type === "snippet"

    const postString = createPostString(
      createFrontmatter(responses.title, responses.slug, isSnippet)
    )

    // Check and make sure that we have all the data.
    // If not throw and catch below.
    if (!responses.fileName) {
      throw "File name not found."
    }

    if (
      responses.type === "blog" &&
      existsSync(path.resolve(POSTS_DIRECTORY, responses.fileName))
    ) {
      throw "Could not create post. Folder name already exists. Select another folder name."
    }

    if (
      isSnippet &&
      existsSync(path.resolve(SNIPPETS_DIRECTORY, `${responses.fileName}.md`))
    ) {
      throw "Could not create post. File name already exists. Select another file name."
    }

    if (isSnippet) {
      writeFileSync(
        path.resolve(SNIPPETS_DIRECTORY, `${responses.fileName}.md`),
        postString
      )
      logger.info("Successfully created snippet")
      process.exit(0)
    } else {
      writeFileSync(
        path.resolve(POSTS_DIRECTORY, `${responses.fileName}.md`),
        postString
      )
      logger.info("Successfully created post")
      process.exit(0)
    }
  } catch (e) {
    logger.error(`Could not create post: ${e}`)
    process.exit(1)
  }
}

// Execution
;(async () => await main())()
