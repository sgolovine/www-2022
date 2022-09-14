import clsx from "clsx"
import React from "react"
import { themeClasses } from "~/config/themeClasses"
import { ResumeProjectsItem } from "../types/Resume"
import { Pill } from "./common/Pill"

export const ProjectItem: React.FC<ResumeProjectsItem> = ({
  name,
  description,
  highlights,
  keywords,
}) => (
  <div className="pt-4 pb-12">
    <p className={clsx(themeClasses.headerColor, "text-xl", "font-bold")}>
      {name}
    </p>
    <p className={themeClasses.textColor}>{description}</p>
    <div className="pt-4">
      {highlights.map((highlight, index) => (
        <p
          className={clsx(themeClasses.textColor, "pl-2", "py-1", "text-sm")}
          key={index}
        >
          {highlight}
        </p>
      ))}
    </div>
    <div className="flex flex-row items-center pt-4">
      {keywords.map((keyword, index) => (
        <Pill key={index}>{keyword}</Pill>
      ))}
    </div>
  </div>
)
