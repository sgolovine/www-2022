import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Input } from "~/components/common/form"
import { TextArea } from "./TextArea.stories"

const Wrapper: React.FC = () => (
  <div className="max-w-3xl">
    <Input label="Name" id="name" placeholder="Your Name" />
    <Input label="Email" id="email" placeholder="Your Email" />
    <Input label="Subject" id="subject" placeholder="Desired Subject Line" />
    <TextArea label="Message" id="message" placeholder="Your Message" />
  </div>
)

export default {
  title: "Form/Form",
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>

const Template: ComponentStory<typeof Wrapper> = args => <Wrapper {...args} />

export const Form = Template.bind({})
