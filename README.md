# My Personal Website

This is the code repository to my personal website. You can visit the website [here](https://sunny.gg)

## Architecture

- Frontend Framework: [NextJS](https://nextjs.org)

- Styling: [TailwindCSS](https://tailwindcss.com/) and [HeadlessUI](https://headlessui.com/)

- Blog: [mdx](https://mdxjs.com/) and [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)

- API Calls: [React Query](https://react-query-v3.tanstack.com/) and [axios](https://axios-http.com/)

- Analytics: WIP

- CMS Content: WIP

## Setting up Locally

This section goes over setting up this project locally. Before your start, make sure you have NodeJS 16.14.0 installed and NPM v8.

1.  Clone the repository

```bash
git clone <repo>
```

2. Install Local Dependencies

```bash
npm install
```

3. Generate a Postmap (see [Post Maps](#post-maps))

```bash
npm run generate:postmap
```

4. Run the Project

```bash
npm run start # Run just the frontend

npm run dev # Run with local backend
```

## Keeping Things Clean and Organized

This project uses a number of devtools to maintain the codebase. Please note that the "Command" should be prefixed with `npm run`

| Name               | Description               | Command                   |
| ------------------ | ------------------------- | ------------------------- |
| Prettier           | Format Code               | `format` / `format:check` |
| Next Lint (ESlint) | Code Linter               | `lint`                    |
| TSC                | Typechecking              | `tsc` / `tsc-watch`       |
| TSPrune            | Dead Code Checker         | WIP                       |
| Depcheck           | Unused Dependency Checker | WIP                       |

There is also the `clean` script that will run `scripts/clean.sh`. This script removes the following folders:

- `.next`
- `dist`
- `node_modules`
- `src/__postmap__.json`

Depending on code changes, these will run automatically via [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged) when you commit. To bypass husky/lint-staged, crate a commit with a `--no-verify` flag.

## Commits

This project uses [commitlint](https://commitlint.js.org/#/) to ensure consistent commit messages. If contributing please make sure commits follow the pattern:

```plaintext
feat(feature): commit message

fix(feature): commit message

chore(feature): commit message

```

## Post Maps

This site uses the concept of "post maps" to help with showing blog posts and snippets. Before running the site, the script `generate-postmap.ts` is run which queries all posts in `content/posts` and snippets in `content/snippets` and outputs it to a map file located in: `src/__postmap__.json`

Post maps contain several top level keys:

- Posts (`posts`): An array of all blog posts

- Snippets (`snippets`): An array of all snippets

- Post Categories (`postCategories`): Array of all post categories.

- Post Tags (`postTags`): Array of all post tags.

- Social Images (`socialImages`): If a post contains a header image, we query and add teh relative path of the image as well as the height and width of the image. This is so NextSEO can assign the proper values to openGraph and JsonLD data in each post.

Each post and snippet in the map contains the relative path to the file from the `content/posts` folder as well as post metadata and a preview of the post (first 160 characters). Snippets are different from posts in that their metadata does not contain a date or a category.

## Feature Flags

This site utilizes feature flags to hide upcoming work. To get a sneak preview of upcoming features, run the site locally (see [setting up locally](#setting-up-locally) for more info) and enable the feature through the development menu (its the terminal icon in the header). You can see default feature flags [here](https://github.com/sgolovine/sunny.gg/blob/main/src/config/defaultFeatures.ts)

## Storybook

This site uses Storybook to prototype certain components. As of now, not all components are in Storybook but the majority are. To run storybook, run: `npm run storybook`.

## Sitemap

This site uses [next-sitemap](https://www.npmjs.com/package/next-sitemap) to generate sitemaps. To generate a sitemap run: `npm run generate:sitemap`. The configuration for this can be found in: `next-sitemap.config.js` and outputs can be found in the `public` directory.

## Functions

This site uses Netlify Functions and there are a number of commands to help you test them locally including:

_Note: All commands should be run with `npm run`_

| Command    | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| `fn:build` | Runs [functions:build](https://cli.netlify.com/commands/functions#functionsbuild) |
| `fn:serve` | Runs [functions:serve](https://cli.netlify.com/commands/functions#functionsserve) |
| `fn:list`  | Runs [functions:list](https://cli.netlify.com/commands/functions#functionslist)   |

## Social Redirects

Often times I have a friend ask for my Venmo, WhatsApp, etc. This site is setup to offer a quick redirect ot those services. Below is a table of all redirects. This is so instead of having to find my Venmo, CashApp, WhatApp link, I can just tell them: "go to sunny.gg/wa for my whatsapp". Config for this can be found in `config/quicklinks.ts`

| Route        | Redirect To       |
| ------------ | ----------------- |
| `/cashapp`   | CashApp           |
| `/contact`   | Contact Info Card |
| `/ig`        | Instagram         |
| `/insta`     | Instagram         |
| `/instagram` | Instagram         |
| `/venmo`     | Venmo             |
| `/wa`        | WhatsApp          |
| `/whatsapp`  | WhatsApp          |

## License

[LICENSE](./LICENSE)
