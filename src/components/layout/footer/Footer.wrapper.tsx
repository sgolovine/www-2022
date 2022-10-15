import { useRouter } from "next/router"
import version from "~/__version__.json"
import Footer from "./Footer"

const commitShort = version?.commit?.substring(0, 7)

const FooterWrapper = () => {
  const { pathname } = useRouter()
  return (
    <Footer
      commitShort={commitShort}
      commitFull={version.commit}
      version={version.version}
      blogPost={pathname === "/post/[slug]"}
    />
  )
}

export default FooterWrapper
