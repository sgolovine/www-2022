import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Header as HeaderComponent } from "../components/header"
import { HeaderRoute, Routes } from "~/model/Routes"

const headerLinks: HeaderRoute[] = [
  {
    id: "home",
    title: "Home",
    link: Routes.Home,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: true,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "work",
    title: "Work",
    link: Routes.Work,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "blog",
    title: "Blog",
    link: Routes.Blog,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "resume",
    title: "Resume",
    link: Routes.Resume,
    showOnHeader: true,
    showOnHomepage: true,
    isActive: false,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "contact",
    title: "Contact",
    link: Routes.Contact,
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
    link: Routes.Blog,
    showOnHeader: false,
    showOnHomepage: false,
    isActive: true,
    onClick: route => console.log("Selected route", route),
  },
  {
    id: "blog-snippets",
    title: "Snippets",
    link: Routes.BlogSnippets,
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
