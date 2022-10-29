---
title: Building a better guestbook for my site.
description: Last year I built an old school style guestbook for my website. This year I built it again, taking in all the lessons learned to make it even better.
date: Oct 28, 2022
slug: make-a-guestbook-pt-2
category: tech
published: false
---

The website guestbook is a bygone era of the internet. Back in the 90's when the web was still in its infancy, it was common to host a guestbook on your website so that visitors could leave a comment. Even software companies like Opera (maker of the [browser](https://www.opera.com/)), had a [guestbook page](https://web.archive.org/web/19980212095842/http://www.operasoftware.com/guestbook.html).

Last year I got inspired to bring back that old part of the web and [build a guestbook](https://sunny.gg/post/make-a-guestbook) for my website. It was a feature I cobbled together in one night before posting it on Hacker News and /r/webdev and considering it done. Very quickly though users began reporting an array of bugs and poking holes in my Red Bull fueled architecture. Well a year or so later I've decided to take another crack at it and build a better guestbook for my site.

## The Architecture

The first iteration of my guestbook ran atop of Github Gist. Github Gist is a pretty great service as it gives you a free scratchpad you can write to programmatically through their API. In my first iteration of the guestbook, I used Gist primarily because I was working on another project that used it and was very familiar with it at the time. While I considered using something like FaunaDB this time around, I decided to stick with Gist not only because of simplicity, but also because I'd like to have a "Ledger" of sorts rather than a DB.

The core architecture of the getting and updating the guestbook is remarkably simple. When the user loads the page I call a Netlify function that would then call the Github API that fetched the gist and display it. If the user decided to upload a comment I call another Netlify function that gets the current guestbook, appends the new comment to the top, and then updates the gist with the new content.

Displaying the gist is also pretty simple as it's just a `<pre>` tag with word wrap. I considered solutions such as the [Monaco Editor](https://microsoft.github.io/monaco-editor/) (the editor from VSCode), but I ran into issues integrating it with my theme. Running some performance tests on using just a `<pre>` tag, I was able to load up a file with 20k or so lines of entries and didn't run into any performance issues so I decided to keep it simple and cross the "scaling and performance" bridge when I have to.

## Content Moderation

Learning from my first iteration of the guestbook, I knew that there had to be some content moderation or else the guestbook page would be the most vile part of my website. As I learned the two biggest headaches were zalgo text and profanity (as well as attempts at XSS injections though this thing is hosted with Gist so that's kind of a moot point). I went into this hoping that I could just find some NPM packages to get the job done and that's exactly what I found: [bad-words](https://www.npmjs.com/package/bad-words) helped me filter out profanity, [unzalgo](https://www.npmjs.com/package/unzalgo) removed zalgo text, and [dompurify](https://www.npmjs.com/package/dompurify) helped prevent XSS injections (again moot point but why not). I feel like I have my bases pretty well covered but we shall see...
