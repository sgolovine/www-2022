import version from "~/__version__.json"
import Footer from "./Footer"

const commitShort = version?.commit?.substring(0, 7)

const FooterWrapper = () => (
  <Footer
    commitShort={commitShort}
    commitFull={version.commit}
    version={version.version}
  />
)

export default FooterWrapper
