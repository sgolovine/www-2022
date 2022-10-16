import { useRouter } from "next/router"
import { getIcon } from "~/components/icons"
import { formatDate } from "~/helpers/formatDate"
import { IconButton } from "~/stories/IconButton.stories"
import { CrewsumPageProps } from "../model/CrewsumPageProps"
import labels from "~/labels.json"
import clsx from "clsx"

const LinkIcon = getIcon("link")

const CrewsumPage: React.FC<CrewsumPageProps> = ({
  title,
  introduction,
  url,
  startDate,
  endDate,
  licenseType,
  techStack,
}) => {
  const router = useRouter()
  const handleGoBack = () => {
    router.back()
  }

  const licenseChipClasses = clsx(
    "border",
    "p-1",
    "text-center",
    "rounded-full",
    "text-xs",
    "w-24",
    {
      "text-green-700": licenseType === "open-source",
      "text-red-700": licenseType === "proprietary",
      "border-green-500": licenseType === "open-source",
      "border-red-500": licenseType === "proprietary",
    }
  )

  const techStackCategories = Object.keys(techStack)

  return (
    <div className="max-w-4xl mx-auto">
      <span className="flex flex-row items-center justify-between pb-4">
        <span className="flex flex-row items-center gap-4">
          <IconButton onClick={handleGoBack} icon="arrowLeft" />
          <h1 className="text-4xl font-black">{title}</h1>
        </span>
        <span>
          <span className="flex flex-row items-center gap-2">
            <LinkIcon className="h-6 w-6" />
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="py-2 text-sm"
            >
              {url}
            </a>
          </span>
          <p className="text-sm text-right">
            {formatDate(startDate)} - {formatDate(endDate)}
          </p>
          <div className="flex flex-row items-center justify-end py-2">
            <div className={licenseChipClasses}>
              <p>
                {licenseType === "open-source"
                  ? labels.projectsPage.licenses.openSource
                  : labels.projectsPage.licenses.proprietary}
              </p>
            </div>
          </div>
        </span>
      </span>
      <div className="pt-2">
        <p className="text-lg">{introduction}</p>
      </div>

      <div className="py-6">
        <h2 className="text-2xl font-black">Tech Stack</h2>
        <div>
          {techStackCategories.map((category, categoryIndex) => {
            return (
              <div className="py-4" key={categoryIndex}>
                <h3 className="text-xl font-bold">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-2">
                  {techStack[category].map((item, itemIndex) => {
                    const ItemIcon = getIcon(item.icon)

                    return (
                      <div
                        key={itemIndex}
                        className="border p-2 rounded-lg flex flex-row items-center gap-2"
                      >
                        <ItemIcon className="h-8 w-8" />
                        <span>
                          <p className="text-lg">{item.title}</p>
                          <p className="text-sm">{item.description}</p>
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
    </div>
  )
}

export default CrewsumPage
