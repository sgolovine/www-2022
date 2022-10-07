import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { AllIcons, allIcons, getIcon } from "~/components/icons"

const iconKeys = Object.keys(allIcons)

const IconWrapper: React.FC = () => {
  return (
    <div>
      <p>Site Icons</p>
      <div className="grid grid-cols-3 gap-10">
        {iconKeys.map(key => {
          const IconComponent = getIcon(key as AllIcons)
          return <IconComponent key={key} className="h-32 w-32" />
        })}
      </div>
    </div>
  )
}

export default {
  title: "Icons",
  component: IconWrapper,
} as ComponentMeta<typeof IconWrapper>

const Template: ComponentStory<typeof IconWrapper> = args => (
  <IconWrapper {...args} />
)

export const IconMap = Template.bind({})
