import version from "~/__version__.json"
import Footer from "./Footer"

const FooterWrapper = () => (
  <Footer
    commitFull={version.commit}
    commitShort={version.commit_short}
    version={version.version}
  />
)

export default FooterWrapper
