import dayjs from "dayjs"
import makeStyles from "./ProjectItem.classes"
import { Project } from "../../model/Project"

const formatUrl = (url: string) =>
  url.replace("http://", "").replace("https://", "")

const formatDate = (dateString: string) => {
  if (dateString === "present") {
    return "Present"
  }
  return dayjs(dateString).format("MMM YYYY")
}

export const ProjectItem: React.FC<Project> = ({
  name,
  url,
  description,
  startDate,
  endDate,
}) => {
  const styles = makeStyles()

  return (
    <div className={styles.container}>
      <span className={styles.headerContainer}>
        <p className={styles.headerText}>{name}</p>
        <span className={styles.headerDateContainer}>
          <p className={styles.headerDateText}>{formatDate(startDate)}</p>
          <p className={styles.headerDateText}>{formatDate(endDate)}</p>
        </span>
      </span>
      {url && (
        <a className={styles.urlText} href={url}>
          {formatUrl(url)}
        </a>
      )}
      <p className={styles.descriptionText}>{description}</p>
    </div>
  )
}
