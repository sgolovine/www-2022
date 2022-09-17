import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Header as HeaderComponent } from "../components/header"

export default {
  title: "Header",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>

const Template: ComponentStory<typeof HeaderComponent> = args => (
  <HeaderComponent {...args} />
)

export const Header = Template.bind({})
Header.args = {
  title: "Header Page",
}

export const HeaderWithPageNavigation = Template.bind({})
HeaderWithPageNavigation.args = {
  title: "Header Page",
  pageNavigation: [
    {
      id: "page-one",
      title: "Page One",
      href: "#",
    },
    {
      id: "page-two",
      title: "Page Two",
      href: "#",
    },
    {
      id: "page-three",
      title: "Page Three",
      href: "#",
    },
    {
      id: "page-four",
      title: "Page Four",
      href: "#",
    },
  ],
}
