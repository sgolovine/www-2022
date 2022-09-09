import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"

interface Props {
  title: string
  bio: string
}

const PageHeader: React.FC<Props> = ({ title, bio }) => (
  <div className="w-full flex flex-col items-center justify-center pt-4 text-center">
    <h1 className={clsx("text-lg", "font-medium", themeClasses.headerColor)}>
      {title}
    </h1>
    <p className={clsx("pt-2", themeClasses.textColor)}>{bio}</p>
  </div>
)

export default PageHeader
