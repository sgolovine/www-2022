import { useRouter } from "next/router"
import { ReactNode } from "react"
import { Button } from "../common/button"
import { Footer } from "../layout"
import labels from "~/labels.json"
import { AppRoutes, appTitles } from "~/config/navigation/apps"

interface Props {
  children: ReactNode
}

const AppsLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const goHome = () => {
    router.push("/")
  }
  const goAllApps = () => {
    router.push("/apps")
  }

  const header = appTitles[router.pathname as AppRoutes]

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">
          {header?.title ?? labels.apps.landing.header}
        </h1>
        <span>
          <Button sm transparent noBorder onClick={goAllApps}>
            {labels.apps.navigation.appsHome}
          </Button>
          <Button sm transparent noBorder onClick={goHome}>
            {labels.apps.navigation.home}
          </Button>
        </span>
      </div>
      <hr className="my-4" />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}

export default AppsLayout
