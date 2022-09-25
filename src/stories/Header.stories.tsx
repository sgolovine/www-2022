import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import HeaderComponent from "~/components/layout/header/Header"
import { HeaderRoute, StaticRoutes } from "~/model/Routes"

const headerLinks: HeaderRoute[] = [
  {
    id: "home",
    title: "Home",
    link: StaticRoutes.Home,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: true,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "work",
    title: "Work",
    link: StaticRoutes.Work,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "blog",
    title: "Blog",
    link: StaticRoutes.Blog,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "resume",
    title: "Resume",
    link: StaticRoutes.Resume,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "contact",
    title: "Contact",
    link: StaticRoutes.Contact,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
]

const pageLinks: HeaderRoute[] = [
  {
    id: "blog-posts",
    title: "Posts",
    link: StaticRoutes.Blog,
    showOnHeader: false,
    showOnHomepage: false,
    isActive: true,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "blog-snippets",
    title: "Snippets",
    link: StaticRoutes.BlogSnippets,
    showOnHeader: false,
    showOnHomepage: false,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
]

export default {
  title: "Header",
  component: HeaderComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderComponent>

const Template: ComponentStory<typeof HeaderComponent> = args => (
  <HeaderComponent {...args} />
)

export const Header = Template.bind({})
Header.args = {
  title: "Page Title",
  headerLinks,
}

export const HeaderWithPageLinks = Template.bind({})
HeaderWithPageLinks.args = {
  title: "Page Title",
  headerLinks,
  pageLinks,
}
