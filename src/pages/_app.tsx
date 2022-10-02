import React, { useState } from "react"

import { AppProps } from "next/app"
import { AppPage } from "~/model/PageProps"
import { Menu } from "~/components/layout"
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  dehydrate,
} from "react-query"

import "../styles/tailwind.css"
import "../styles/global.css"
import "../styles/post-image.css"
import "../styles/prism-nord-theme.css"
import { FeaturesContextProvider } from "~/context/FeaturesContext"

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
        <FeaturesContextProvider>
          <Menu />
          {Component}
        </FeaturesContextProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
