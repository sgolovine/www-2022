import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TestComponent } from "~/components/common/TestComponent"

export default {
  title: "TestComponent",
  component: TestComponent,
  // parameters: {
  //   layout: "fullscreen",
  // },
} as ComponentMeta<typeof TestComponent>

const Template: ComponentStory<typeof TestComponent> = args => (
  <TestComponent {...args} />
)

export const TestTemplate = Template.bind({})
