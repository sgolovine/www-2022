import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ListItem } from "~/components/listItem"

export default {
  title: "ListItem",
  component: ListItem,
  // parameters: {
  //   layout: "fullscreen",
  // },
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = args => <ListItem {...args} />

export const KitchenSink = Template.bind({})
KitchenSink.args = {
  title: "List Item Title",
  date: new Date().toString(),
  description: "List Item Description Here",
  preview: "List Item Preview",
  category: "Some Category",
  onClick: () => console.log("list item clicked"),
}

export const NoCategory = Template.bind({})
NoCategory.args = {
  title: "List Item Title",
  date: new Date().toString(),
  description: "List Item Description Here",
  preview: "List Item Preview",
  // category: "Some Category",
  onClick: () => console.log("list item clicked"),
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  title: "List Item Title",
  date: new Date().toString(),
  // description: "List Item Description Here",
  preview: "List Item Preview",
  category: "Some Category",
  onClick: () => console.log("list item clicked"),
}

export const NoDate = Template.bind({})
NoDate.args = {
  title: "List Item Title",
  description: "List Item Description Here",
  category: "Some Category",
  onClick: () => console.log("list item clicked"),
}

export const NoDateOrCategory = Template.bind({})
NoDateOrCategory.args = {
  title: "List Item Title",
  description: "List Item Description Here",
  onClick: () => console.log("list item clicked"),
}

export const MinimalExample = Template.bind({})
MinimalExample.args = {
  title: "List Item Title",
  onClick: () => console.log("list item clicked"),
}
