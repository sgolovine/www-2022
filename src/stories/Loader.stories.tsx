import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Loader as LoaderComponent } from "~/components/common/Loader"

export default {
  title: "Loader",
  component: LoaderComponent,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoaderComponent>

const Template: ComponentStory<typeof LoaderComponent> = args => (
  <LoaderComponent {...args} />
)

export const Loader = Template.bind({})
Loader.args = {
  visible: true,
  // In storybook you have to specify undefined if you want to prop to
  // Explicitly not be defined.
  onCancel: undefined,
}

export const LoaderWithCancel = Template.bind({})
LoaderWithCancel.args = {
  visible: true,
  onCancel: () => console.log("cancel"),
}
