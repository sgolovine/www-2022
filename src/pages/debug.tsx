import { StaticProps } from "~/model/PageProps"
import { getVersion } from "~/services/node/getVersion.node"

import { AppPage } from "~/model/PageProps"
import { StaticRoutes } from "~/model/Routes"
import Link from "next/link"
import clsx from "clsx"

interface PageProps {
  version: string
  commit: string
}

const Page: AppPage<PageProps> = ({ version, commit }) => {
  const linkClasses = clsx("text-blue-600", "font-medium", "hover:underline")

  const githubUrl = `https://github.com/sgolovine/sunny.gg/commit/${commit}`

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Debug Page</h1>
      <div className="pb-4">
        <Link href={StaticRoutes.Home}>
          <a className={linkClasses}>Go Home</a>
        </Link>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="font-bold text-sm">Version: </td>
            <td className="font-mono text-sm">{version}</td>
          </tr>
          <tr>
            <td className="font-bold text-sm">Commit: </td>
            <td className="font-mono text-sm">
              {commit} (
              <a className={linkClasses} href={githubUrl}>
                Github Link
              </a>
              )
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export const getStaticProps = async (): StaticProps<PageProps> => {
  const { version, commit } = await getVersion()
  return {
    props: {
      version,
      commit,
    },
  }
}

export default Page
