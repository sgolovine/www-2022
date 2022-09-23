---
title: File Based Routing Needs to Stop
slug: file-based-routing-needs-to-stop
date: 09/22/2022
description: Frameworks like Gatsby and NextJS use file-based routing for "simplicity", but they need to offer a programatic routing method.
category: tech
# tags:
# headerImage:
published: false
---

If I was the author of [Gatsby](https://www.gatsbyjs.com/) or [NextJS](https://nextjs.org/), one change that I would make is to let users define routing with a configuration file rather than through a file based approach.

If you don't know already, in both NextJS and Gatsby, you create new pages by adding files to the `pages` folder in your source code. So if you wanted to have an about page you can just create `pages/about.js` and Gatsby or Next will figure the rest out.

I get why it's done this way, it allows routing with zero configuration. But while you get the benefit of not having to configure routing, the downside is that you _have_ to do it this way, and there's no alternative. So if you end up with a complex routing structure to your site, the only way to organize those routes would be with nested files in the `pages` folder. This strategy works great when you have a `/`, `/blog` and `/about` routes, it gets tricky when you have multiple nested routes like: `/products/:category/:subcategory/:product/pricing`. With a route like this btw, your folder structure in nextJS will look something like this:

```
src/
	pages/
		[category]/
			[subcategory]/
				[product]/
					pricing.js
```

The alternative here is rather simple, allow routing based on a configuration file. For NextJS you could have a file called `navigation.tsx` that sits at the root of your project and roughly looks like this:

```javascript

export const pages = [
	{
		route: '/'
		component: Home,
		getStaticProps: homeGetStaticPropsHandler
	},
	{
		route: '/blog',
		component: Blog,
		getStaticProps: blogGetStaticPropsHandler
	},
	{
	 route: '/post/:post',
	 component: BlogTemplate,
	 getStaticProps: blogTemplateGetStaticProps,
	 getStaticPaths: blogTempalteGetStaticPaths,
	}
]

```

Look how much nicer this is than having a `pages` folder that would inevitably look like this:

```
/pages
	/home.js
	/blog.js
	/post
		/[slug].js
```

Vercel and Gatsby, please take a page out of React Router's book and let us add a configuration file that defines routing rather than making us go through file based routing.
