import type { NextPage } from "next"
import type { ReactElement, ReactNode } from "react"

// Return for page
// Usage: export const MyPage: AppPage = () => { ... }
export type AppPage<Props = {}> = NextPage<Props> & {
  getLayout?: (page: ReactElement) => ReactNode
}

// Return type for getStaticProps.
// Usage: function getStaticProps(): StaticProps<Props> { ... }
export type StaticProps<Props = {}> = Promise<{
  props: Partial<Props>
}>
