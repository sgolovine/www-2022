import Link from "next/link"
import { AppPage } from "~/model/PageProps"

const Page: AppPage = () => (
  <div className="absolute h-full w-full bg-grey-200">
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-7xl font-black text-gray-900">404</h1>
      <h2 className="text-4xl font-black text-gray-900">Page Not Found</h2>
      <span className="mt-6">
        <Link href="/">
          <a className="text-xl font-bold text-blue-500">Go Home</a>
        </Link>
      </span>
    </div>
  </div>
)

export default Page
