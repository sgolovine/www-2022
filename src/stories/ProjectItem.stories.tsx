import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ProjectItem } from "~/features/projects/component/ProjectItem/ProjectItem"

export default {
  title: "Project Item",
  component: ProjectItem,
  // parameters: {
  //   layout: "fullscreen",
  // },
} as ComponentMeta<typeof ProjectItem>

const Template: ComponentStory<typeof ProjectItem> = args => (
  <ProjectItem {...args} />
)

export const ProjectItemComponent = Template.bind({})
ProjectItemComponent.args = {
  name: "Crewsum",
  url: "https://crewsum.com",
  description:
    "Crewsum is an upcoming talent management platform that lets you track timesheet approvals, send out invoices and much more. Built in conjunction with Cloud Talent Services.",
  startDate: "02/01/2022",
  endDate: "present",
}

export const WithoutURL = Template.bind({})
WithoutURL.args = {
  name: "Crewsum",
  description:
    "Crewsum is an upcoming talent management platform that lets you track timesheet approvals, send out invoices and much more. Built in conjunction with Cloud Talent Services.",
  startDate: "02/01/2022",
  endDate: "present",
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  name: "Crewsum",
  url: "https://crewsum.com",
  startDate: "02/01/2022",
  endDate: "present",
}

export const Minimal = Template.bind({})
Minimal.args = {
  name: "Crewsum",
  startDate: "02/01/2022",
  endDate: "present",
}
