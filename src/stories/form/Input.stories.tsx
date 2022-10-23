import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Input as InputComponent } from "~/components/common/form"

export default {
  title: "Form/Input",
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>

const Template: ComponentStory<typeof InputComponent> = args => (
  <InputComponent {...args} />
)

export const Input = Template.bind({})
Input.args = {
  id: "input",
  label: "Input Label",
}

export const WithError = Template.bind({})
WithError.args = {
  id: "input",
  label: "Input Label",
  hasError: true,
  errorMessage: "This is an error message",
}
