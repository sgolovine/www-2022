import React from "react"
import { IconButton as IconButtonComponent } from "~/components/common/iconButton"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Icon Button",
  component: IconButtonComponent,
} as ComponentMeta<typeof IconButtonComponent>

const Template: ComponentStory<typeof IconButtonComponent> = args => (
  <IconButtonComponent {...args} />
)

export const IconButton = Template.bind({})
IconButton.args = {
  icon: "bars3",
}

export const BrandIcon = Template.bind({})
BrandIcon.args = {
  icon: "github",
}
