import { ReactNode } from "react"

export const PageContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => <div className="max-w-xl mx-auto">{children}</div>
