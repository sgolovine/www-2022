import React, { useState } from "react"

import { AppProps } from "next/app"
import { AppPage } from "~/model/PageProps"
import { Menu } from "~/components/layout"
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  dehydrate,
} from "@tanstack/react-query"

import "../styles/tailwind.css"
import "../styles/global.css"
import "../styles/relative-image.css"
import "../styles/prism-nord-theme.css"

type AppPropsWithLayout = AppProps & {
  Component: AppPage
}

const App = ({ Component: PageComponent, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient())
  const dehydratedState = dehydrate(queryClient)

  // Use the layout defined at the page level, if available
  const Component = PageComponent.getLayout ? (
    PageComponent.getLayout(<PageComponent {...pageProps} />)
  ) : (
    <PageComponent {...pageProps} />
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Menu />
        {Component}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
