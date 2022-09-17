import React from "react"
import { Button as ButtonComponent } from "~/components/common/button"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = args => (
  <ButtonComponent {...args}>Click Me</ButtonComponent>
)

export const Button = Template.bind({})
Button.args = {
  onClick: () => console.log("I have been clicked"),
  sm: false,
}

export const ButtonSmall = Template.bind({})
ButtonSmall.args = {
  onClick: () => console.log("I have been clicked"),
  sm: true,
}

export const ButtonTransparent = Template.bind({})
ButtonTransparent.args = {
  onClick: () => console.log("I have been clicked"),
  sm: false,
  transparent: true,
}
