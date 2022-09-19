import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import FooterComponent from "~/components/layout/footer/Footer"

export default {
  title: "Footer",
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>

const Template: ComponentStory<typeof FooterComponent> = args => (
  <FooterComponent {...args} />
)

export const Footer = Template.bind({})
Footer.args = {
  // these values are optional
  // version: 0.0.0
  // commitFull: full-commit
  // commitShort: short-commit
}
