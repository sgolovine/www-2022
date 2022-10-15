import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import labels from "~/labels.json"

interface Props {
  commitFull?: string
  commitShort?: string
  version?: string
  blogPost?: boolean
}

const DEFAULT_VERSION = "0.0.0"
const DEFAULT_COMMIT = "3d912bd00644fdd1068a58b06939a3221360e4b7"
const DEFAULT_COMMIT_SHORT = "3d912bd"

const Footer: React.FC<Props> = ({
  commitFull,
  commitShort,
  version,
  blogPost,
}) => {
  const githubUrl = `https://github.com/sgolovine/sunny.gg/commit/${
    commitFull ?? DEFAULT_COMMIT
  }`
  const currentYear = new Date().getFullYear()
  const copyrightText = `${labels.footer.copyright} ${currentYear}, ${labels.footer.author}`

  return (
    <div className="text-center">
      <p className={clsx(themeClasses.textColor, "font-medium", "text-sm")}>
        {copyrightText}
      </p>
      {blogPost && (
        <p className={clsx(themeClasses.textColor, "font-medium", "text-sm")}>
          {labels.blog.template.disclaimer}
        </p>
      )}
      <p className={clsx("font-light", "text-sm", themeClasses.textColor)}>
        {labels.footer.version}: {version ?? DEFAULT_VERSION} (
        <a className={clsx(themeClasses.linkColor)} href={githubUrl}>
          {commitShort ?? DEFAULT_COMMIT_SHORT}
        </a>
        )
      </p>
    </div>
  )
}

export default Footer
