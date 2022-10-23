import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TextArea as TextAreaComponent } from "~/components/common/form"

export default {
  title: "Form/TextArea",
  component: TextAreaComponent,
} as ComponentMeta<typeof TextAreaComponent>

const Template: ComponentStory<typeof TextAreaComponent> = args => (
  <TextAreaComponent {...args} />
)

export const TextArea = Template.bind({})
TextArea.args = {
  id: "text-area",
  label: "Textarea Label",
}

export const WithError = Template.bind({})
WithError.args = {
  id: "text-area",
  label: "Textarea Label",
  hasError: true,
  errorMessage: "Invalid Message Size",
}
