# My Personal Website

[Link to Website](https://sunny.gg) | [Alternative Link](https://sunnygolovine.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fc2a46c-2040-43d7-a58e-62b74b6ec549/deploy-status)](https://app.netlify.com/sites/sunnygg/deploys)
[![Lint Posts](https://github.com/sgolovine/sunny.gg/actions/workflows/lint-posts.yml/badge.svg)](https://github.com/sgolovine/sunny.gg/actions/workflows/lint-posts.yml)
[![PR Lint](https://github.com/sgolovine/sunny.gg/actions/workflows/lint-site.yml/badge.svg)](https://github.com/sgolovine/sunny.gg/actions/workflows/lint-site.yml)
[![Push Dry Build](https://github.com/sgolovine/sunny.gg/actions/workflows/push-dry-build.yml/badge.svg)](https://github.com/sgolovine/sunny.gg/actions/workflows/push-dry-build.yml)
[![Push Lint](https://github.com/sgolovine/sunny.gg/actions/workflows/push-lint.yml/badge.svg)](https://github.com/sgolovine/sunny.gg/actions/workflows/push-lint.yml)

This codebase holds my personal website. This readme describes the architecture of this website as well as guide on installing, running and building the website locally.

## Setup

**Prerequsites**: You must have the correct NodeJS version installed. Please refer to `~/.nvmrc` for the correct Node Version. It's recommended that you use [NVM](https://github.com/nvm-sh/nvm) to install and manage NodeJS versions.

1. Clone the Repo: `git clone https://github.com/sgolovine/sunny.gg.git`

2. Install Dependencies: `npm install`

3. Run The Project: `npm run dev`

## Architecture.

This website is built with NextJS and uses TailwindCSS for styling the UI. Content is loaded from `/public` and queried by each page as they are needed.

- Blog Posts: Loaded from `/public/posts` and uses [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote) to load the content at build time. Each post contains a `slug` field that tells the site what path to render it to. So if a post has the slug `my-test-post`, the path would be: `/blog/post/my-test-post`. Running the command `npm run generate:postmap` will generate a postmap that contains absolute paths and slugs for each post. This allows index pages to load this file rather than querying all posts to get this map in realtime. This script runs on `postinstall` and also runs in CI whenever we deploy the site. Postmaps are stored in `~/src/__postmap__.json`

- Snippets: Snippets are loaded exactly like blog posts. The key difference is pages are built to: `/snippets/:snippet`

- Images: This site does not use default NextJS image optimization. Rather it uses [next-image-export-optimizer](https://www.npmjs.com/package/next-image-export-optimizer) which runs during the export step. After adding new images to the site you should run: `npm run optimize-images` after adding new images to the site in order to generate new image sizes and hashes.

- Version: We track the current version and commit hash. When the site starts we pull the version from `package.json` and the latest commit hash from git and store it in `~/src/__postmap__.json`

- Env: The env is set manually through the Netlify UI but a copy is stored in `~/.env.example`. See [env](#env) for more info.

- Feature Flags: This website uses feature flags to hide work that is not ready to be published. Feature flags are located in `~/config/featureFlags.ts`.

- Strings: All strings on the website are kept in `~/labels.json`. This is to facilitate easier internationalization in the future.

## Env

The following env variables are required by the app.

Functions = ENV variables used by Netlify Functions

UI = ENV Variables used by the UI

| Name               | Description             | Location  |
| ------------------ | ----------------------- | --------- |
| `SENDGRID_API_KEY` | API Key for Sendgrid    | Functions |
| `REPLY_TO`         | Where to send the email | Functions |
