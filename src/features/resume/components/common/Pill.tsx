import React from "react"

interface Props {
  children: string
}

export const Pill: React.FC<Props> = ({ children }) => (
  <p className="mx-2 py-1 px-2 bg-gray-300 dark:bg-gray-400 text-gray-900 rounded-lg drop-shadow-sm text-sm font-bold">
    {children}
  </p>
)
