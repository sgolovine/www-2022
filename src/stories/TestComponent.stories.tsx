import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TestComponent } from "~/components/common/TestComponent"

export default {
  title: "TestComponent",
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>

const Template: ComponentStory<typeof TestComponent> = args => (
  <TestComponent {...args} />
)

export const TestTemplate = Template.bind({})
