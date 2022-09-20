import React, { useState } from "react"

import { AppProps } from "next/app"
import { AppPage } from "~/model/PageProps"
import { Menu } from "~/components/layout"
import { QueryClient, QueryClientProvider, Hydrate } from "react-query"

import "../styles/tailwind.css"
import "../styles/global.css"
import "../styles/post-image.css"
import "../styles/prism-nord-theme.css"

type AppPropsWithLayout = AppProps & {
  Component: AppPage
}

const App = ({ Component: PageComponent, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient())

  // Use the layout defined at the page level, if available
  const Component = PageComponent.getLayout
    ? PageComponent.getLayout(<PageComponent {...pageProps} />)
    : PageComponent

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <>
          <Menu />
          {Component}
        </>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
