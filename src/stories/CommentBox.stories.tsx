import React from "react"
import { CommentBox as CommentBoxComponent } from "~/features/guestbook"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Guestbook/CommentBox",
  component: CommentBoxComponent,
} as ComponentMeta<typeof CommentBoxComponent>

const Template: ComponentStory<typeof CommentBoxComponent> = args => (
  <CommentBoxComponent {...args} />
)

export const CommentBox = Template.bind({})
CommentBox.args = {
  isError: false,
  isLoading: false,
  isSuccess: false,
}
