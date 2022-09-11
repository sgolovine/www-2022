import React, { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"
import { AppPage } from "~/model/PageProps"

import "../styles/tailwind.css"
import "../styles/global.css"
import "../styles/post-image.css"
import "../styles/prism-nord-theme.css"

type AppPropsWithLayout = AppProps & {
  Component: AppPage
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}
