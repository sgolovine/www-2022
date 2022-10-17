import dayjs from "dayjs"
import makeStyles from "./ProjectItem.classes"
import { Project } from "../../model/Project"
import { getIcon } from "~/components/icons"
import Link from "next/link"

const LinkIcon = getIcon("link")

const GithubIcon = getIcon("github")

const formatUrl = (url: string) =>
  url.replace("http://", "").replace("https://", "")

const formatDate = (dateString: string) => {
  if (dateString === "present") {
    return "Present"
  }
  return dayjs(dateString).format("MMM YYYY")
}

export const ProjectItem: React.FC<Project> = ({
  id,
  name,
  url,
  description,
  startDate,
  endDate,
  github,
  hasRoute,
}) => {
  const styles = makeStyles()

  return (
    <div className={styles.container}>
      <span className={styles.headerContainer}>
        {hasRoute ? (
          <Link href={`/projects/${id}`}>
            <a className={styles.headerLinkText}>{name}</a>
          </Link>
        ) : (
          <p className={styles.headerText}>{name}</p>
        )}
        <span className={styles.headerDateContainer}>
          <p className={styles.headerDateText}>{formatDate(startDate)}</p>
          <p className={styles.headerDateText}>{formatDate(endDate)}</p>
        </span>
      </span>
      {github && (
        <a className={styles.urlText} href={github.url}>
          <GithubIcon className="h-4 w-4" />
          {github.label}
        </a>
      )}
      {url && (
        <a className={styles.urlText} href={url}>
          <LinkIcon className="h-6 w-6" />
          {formatUrl(url)}
        </a>
      )}
      <p className={styles.descriptionText}>{description}</p>
      <span className={styles.mobileDateContainer}>
        <p className={styles.headerDateText}>{formatDate(startDate)}</p>
        <p className={styles.headerDateText}>{formatDate(endDate)}</p>
      </span>
    </div>
  )
}
