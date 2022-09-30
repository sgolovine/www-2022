import { useRouter } from "next/router"
import { ReactNode } from "react"
import { Button } from "../common/button"
import { Footer } from "../layout"
import labels from "~/labels.json"

interface Props {
  header: string
  children: ReactNode
}

const AppsLayout: React.FC<Props> = ({ header, children }) => {
  const router = useRouter()

  const goHome = () => {
    router.push("/")
  }

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-bold">{header}</h1>
        <Button sm transparent noBorder onClick={goHome}>
          {labels.apps.homeLabel}
        </Button>
      </div>
      <hr className="my-4" />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}

export default AppsLayout
