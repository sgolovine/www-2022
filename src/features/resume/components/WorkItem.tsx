import React from "react"
import clsx from "clsx"
import { ResumeWorkItem } from "../types/Resume"
import { getTenure } from "../helpers/getTenure"
import { getTimePeriod } from "../helpers/getTimePeriod"
import { themeClasses } from "~/config/themeClasses"

export const WorkItem: React.FC<ResumeWorkItem> = ({
  name,
  url,
  startDate,
  endDate,
  positions,
}) => {
  const positionsUI = positions.length > 1
  const singlePosition = positions[0]

  const formattedDate = getTimePeriod(startDate, endDate)

  const tenure = getTenure(startDate, endDate)

  const renderName = () => {
    const classes = clsx(themeClasses.headerColor, "text-xl", "font-bold")

    if (!positionsUI) {
      return <p className={classes}>{singlePosition.position}</p>
    }
    if (url) {
      return (
        <a href={url}>
          <p className={classes}>{name}</p>
        </a>
      )
    }
    return <p className={classes}>{name}</p>
  }

  const renderMultiPositions = () => (
    <>
      {positions.map((position, index) => {
        const timePeriod = getTimePeriod(
          position.startDate ?? startDate,
          position.endDate ?? endDate
        )
        const tenure = getTenure(
          position.startDate ?? startDate,
          position.endDate ?? endDate
        )

        const borderClassnames = clsx("my-4", "ml-2", "pl-4", "border-l-2", {
          "border-green-400": index === 0,
          "border-blue-400": index === 1,
          "border-lime-400": index === 2,
          "border-orange-400": index === 3,
          "border-yellow-400": index === 4,
          "border-teal-400": index === 5,
        })

        return (
          <div key={index} className={borderClassnames}>
            <div className="flex flex-row items-center justify-between">
              <p
                className={clsx(
                  themeClasses.headerColor,
                  "text-lg",
                  "font-bold"
                )}
              >
                {position.position}
              </p>
              <p className={clsx(themeClasses.detailTextColor, "text-sm")}>
                {timePeriod}
              </p>
            </div>
            <p className={clsx("text-sm", themeClasses.detailTextColor)}>
              {tenure}
            </p>
            <div className="pt-2">
              {position.summary.map((summaryItem, index) => (
                <p
                  key={index}
                  className={clsx(themeClasses.textColor, "text-sm", "my-2")}
                >
                  {summaryItem}
                </p>
              ))}
            </div>
          </div>
        )
      })}
    </>
  )

  const renderSinglePosition = () => (
    <div className="my-4">
      <div>
        {singlePosition.summary.map((summaryItem, index) => (
          <p
            key={index}
            className={clsx("text-sm", "my-2", themeClasses.textColor)}
          >
            {summaryItem}
          </p>
        ))}
      </div>
    </div>
  )

  return (
    <div className="pt-4 pb-12">
      <div className="flex flex-row items-center justify-between">
        {renderName()}
        <p className={clsx(themeClasses.detailTextColor, "text-sm")}>
          {formattedDate}
        </p>
      </div>
      {!positionsUI && (
        <p className={clsx(themeClasses.textColor, "font-medium")}>{name}</p>
      )}
      <p className={clsx(themeClasses.detailTextColor, "text-sm")}>{tenure}</p>
      <div className="pt-2">
        {positionsUI ? renderMultiPositions() : renderSinglePosition()}
      </div>
    </div>
  )
}
