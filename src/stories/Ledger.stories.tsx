import React from "react"
import { Ledger as LedgerComponent } from "~/features/guestbook"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Guestbook/Ledger",
  component: LedgerComponent,
} as ComponentMeta<typeof LedgerComponent>

const Template: ComponentStory<typeof LedgerComponent> = args => (
  <LedgerComponent {...args} />
)

export const Ledger = Template.bind({})
Ledger.args = {}
