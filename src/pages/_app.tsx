import React, { ReactElement, ReactNode } from "react"
import { AppProps } from "next/app"
import { AppPage } from "~/model/PageProps"

import "../styles/tailwind.css"
import "../styles/global.css"
import "../styles/post-image.css"
import "../styles/prism-nord-theme.css"
import { MobileMenuWrapper } from "~/components/mobileMenu/MobileMenuWrapper"

type AppPropsWithLayout = AppProps & {
  Component: AppPage
}

export default function App({
  Component: PageComponent,
  pageProps,
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = PageComponent.getLayout ?? (page => page)

  const Component = getLayout(<PageComponent {...pageProps} />)

  return (
    <>
      <MobileMenuWrapper />
      {Component}
    </>
  )
}
