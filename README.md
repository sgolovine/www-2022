# My Personal Website

[Link to Website](https://sunny.gg) | [Alternative Link](https://sunnygolovine.com)

[![Push Lint](https://github.com/sgolovine/sunny.gg/actions/workflows/push-lint.yml/badge.svg)](https://github.com/sgolovine/sunny.gg/actions/workflows/push-lint.yml)
|
[![Deploy Site](https://github.com/sgolovine/sunny.gg/actions/workflows/deploy-site.yml/badge.svg)](https://github.com/sgolovine/sunny.gg/actions/workflows/deploy-site.yml)
|
[![Deploy Site (Manual)](https://github.com/sgolovine/sunny.gg/actions/workflows/deploy-site-manually.yml/badge.svg)](https://github.com/sgolovine/sunny.gg/actions/workflows/deploy-site-manually.yml)

This codebase holds my personal website. This readme describes the architecture of this website as well as guide on installing, running and building the website locally.

## Setup

**Prerequsites**: You must have the correct NodeJS version installed. Please refer to `~/.nvmrc` for the correct Node Version. It's recommended that you use [NVM](https://github.com/nvm-sh/nvm) to install and manage NodeJS versions.

1. Clone the Repo: `git clone https://github.com/sgolovine/sunny.gg.git`

2. Install Dependencies: `npm install`

3. Clone the content: `npm run clone-content-public`

4. Build a postmap: `npm run generate:postmap`

5. Run The Project: `npm run dev`

## Architecture.

This website is built with NextJS and uses TailwindCSS for styling the UI. Content is loaded from `/public` and queried by each page as they are needed.

- Content: This site keeps it's content in a different repository. When the project is setup, one of the steps is to clone the content from its remote location to `./content`. Inside content we have: project, resume, posts and snippets.

- Images: This site does not use default NextJS image optimization. Rather it uses [next-image-export-optimizer](https://www.npmjs.com/package/next-image-export-optimizer) which runs during the export step. After adding new images to the site you should run: `npm run optimize-images` after adding new images to the site in order to generate new image sizes and hashes.

- Version: We track the current version and commit hash. When the site starts we pull the version from `package.json` and the latest commit hash from git and store it in `~/src/__postmap__.json`

- Env: The env is set manually through the Netlify UI but a copy is stored in `~/.env.example`. See [env](#env) for more info.

- Feature Flags: This website uses feature flags to hide work that is not ready to be published. Feature flags are located in `~/config/featureFlags.ts`.

- Strings: All strings on the website are kept in `~/labels.json`. This is to facilitate easier internationalization in the future.

## Env

The following env variables are required by the app.

Functions = ENV variables used by Netlify Functions

UI = ENV Variables used by the UI

| Name                 | Description                             | Location  |
| -------------------- | --------------------------------------- | --------- |
| `SENDGRID_API_KEY`   | API Key for Sendgrid                    | Functions |
| `REPLY_TO`           | Where to send the email                 | Functions |
| `CONTENT_REPO`       | Content Repo URL                        | Actions   |
| `CONTENT_BRANCH`     | Content Repo Branch                     | Actions   |
| `CONTENT_TOKEN`      | Github PAT for cloning content          | Actions   |
| `NETLIFY_SITE_ID`    | ID of the netlify site                  | Actions   |
| `NETLIFY_AUTH_TOKEN` | Auth token to upload content to Netlify | Actions   |

ENV variables for `Functions` must be set in the NetlifyUI.

ENV variables for `Actions` must be set in Github.

## Post Frontmatter

Frontmatter is metadata at the top of each post that defines things such as the title, slug, description, etc. Below is a table of all these options:

| Field         | Description              | Required |
| ------------- | ------------------------ | -------- |
| `title`       | Title of the post        | Yes      |
| `date`        | Date of the post         | Yes      |
| `published`   | Whether to show the post | Yes      |
| `slug`        | Post Slug                | Yes      |
| `description` | Description of the post  | No       |
| `category`    | Post Category            | No       |
| `tags`        | Post Tags                | No       |
| `headerImage` | Link to the header image | No       |

The `headerImage` field should reference an image in `public/images/posts` and should be a relative path from that path. So if you have an image at: `public/images/posts/my-awesome-image.png`. You would just specify `my-awesome-image.png` in Frontmatter.

## Content

While the code to this website is public. The content powering the website is not. This section goes over how to create your own content repository and link it with this project.

To create your own content repository, see the "public content" repo for this site [here](https://github.com/sgolovine/sunny.gg-contentpublic). You will want to clone this repo and then replace the data with your own. Finally, replace the clone url for `clone-content` and replace it with your own repository.
