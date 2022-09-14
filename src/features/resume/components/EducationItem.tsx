import clsx from "clsx"
import React from "react"
import { ResumeEducationItem } from "../types/Resume"
import { getTimePeriod } from "../helpers/getTimePeriod"
import { themeClasses } from "~/config/themeClasses"

export const EducationItem: React.FC<ResumeEducationItem> = ({
  institution,
  url,
  area,
  studyType,
  startDate,
  endDate,
}) => {
  const formattedDate = getTimePeriod(startDate, endDate)

  const renderName = () => {
    const classes = clsx("text-xl", "font-bold", themeClasses.headerColor)
    if (url) {
      return (
        <a href={url}>
          <p className={classes}>{institution}</p>
        </a>
      )
    }
    return <p className={classes}>{institution}</p>
  }

  return (
    <div className="pt-4 pb-12">
      <div className="flex flex-row items-center justify-between">
        {renderName()}
        <p className={clsx("text-sm", themeClasses.detailTextColor)}>
          {formattedDate}
        </p>
      </div>
      <p
        className={clsx("text-sm", themeClasses.detailTextColor)}
      >{`${studyType} - ${area}`}</p>
    </div>
  )
}
