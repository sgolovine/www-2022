import { getIcon } from "~/components/icons"
import { formatDate } from "~/helpers/formatDate"
import { IconButton } from "~/stories/IconButton.stories"
import {
  LicenseTypes,
  ProjectPageTemplateProps,
} from "../../model/ProjectPageTemplateProps"
import labels from "~/labels.json"
import makeStyles from "./ProjectPageTemplate.classes"
import { Image } from "~/components/Image"
import { ExpandImageModal } from "./ExpandImageModal"
import { useState } from "react"
import { MDXRemote } from "next-mdx-remote"

const LinkIcon = getIcon("link")
const Expand = getIcon("expand")

const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({
  title,
  introduction,
  url,
  startDate,
  endDate,
  licenseType,
  techStack,
  onGoBack,
  screenshots,
  mdx,
}) => {
  console.log("screenshots", screenshots)

  const styles = makeStyles(licenseType)

  const techStackCategories = Object.keys(techStack)

  const [expandImageSrc, setExpandImageSrc] = useState<string>()
  const [showExpandImageModal, setExpandImageModal] = useState<boolean>(false)

  const handleImageClick = (src: string) => {
    setExpandImageSrc(src)
    setTimeout(() => {
      setExpandImageModal(true)
    }, 50)
  }

  return (
    <>
      <div className={styles.container}>
        <span className={styles.headerContainer}>
          <span className={styles.headerTitleContainer}>
            <IconButton onClick={onGoBack} icon="arrowLeft" />
            <h1 className={styles.headerTitle}>{title}</h1>
          </span>
          <span>
            <span className={styles.linkContainer}>
              <LinkIcon className={styles.urlIcon} />
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styles.urlText}
              >
                {url}
              </a>
            </span>
            <p className={styles.dateText}>
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
            <div className={styles.licenseChipContainer}>
              <div className={styles.licenseChip}>
                <p>
                  {licenseType === LicenseTypes.OpenSource
                    ? labels.projectsPage.licenses.openSource
                    : labels.projectsPage.licenses.proprietary}
                </p>
              </div>
            </div>
          </span>
        </span>

        <div className={styles.introContainer}>
          {mdx ? (
            <div className={styles.introText}>
              <MDXRemote compiledSource={mdx} />
            </div>
          ) : (
            <p className={styles.introText}>{introduction}</p>
          )}
        </div>

        {/* Tech Stack */}
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionHeaderText}>
            {labels.projectsPage.techStack}
          </h2>
          <div>
            {techStackCategories.map((category, categoryIndex) => {
              return (
                <div
                  className={styles.techStackCategoryContainer}
                  key={categoryIndex}
                >
                  <h3 className={styles.techStackSectionHeaderText}>
                    {category}
                  </h3>
                  <div className={styles.techStackItemsContainer}>
                    {techStack[category].map((item, itemIndex) => {
                      const ItemIcon = getIcon(item.icon)

                      return (
                        <div
                          key={itemIndex}
                          className={styles.techStackItemContainer}
                          style={{
                            borderColor: item.color,
                          }}
                        >
                          <ItemIcon className={styles.techStackItemIcon} />
                          <span>
                            <p className={styles.techStackItemHeaderText}>
                              {item.title}
                            </p>
                            <p className={styles.techStackItemDescriptionText}>
                              {item.description}
                            </p>
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Screenshots */}
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionHeaderText}>
            {labels.projectsPage.screenshots}
          </h2>
          <div className={styles.galleryGridContainer}>
            {screenshots.map((screenshot, index) => {
              return (
                <div key={index} className={styles.galleryImageContainer}>
                  <Image
                    className={styles.galleryImageComponent}
                    src={`images/${screenshot}`}
                    layout="fill"
                    alt="Screenshot"
                  />
                  <div
                    className={styles.galleryImageOverlayContainer}
                    onClick={() => handleImageClick(`images/${screenshot}`)}
                  >
                    <Expand className={styles.galleryImageOverlayIcon} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Screenshot Expand Modal */}
      <ExpandImageModal
        alt="Screenshot"
        visible={showExpandImageModal}
        onClose={() => setExpandImageModal(false)}
        src={expandImageSrc}
      />
    </>
  )
}

export default ProjectPageTemplate
