import clsx from "clsx"
import React from "react"
import { themeClasses } from "~/config/themeClasses"
import { ResumeSkillItem } from "../types/Resume"
import { Pill } from "./common/Pill"

export const SkillsItem: React.FC<ResumeSkillItem> = ({
  name,
  level,
  keywords,
}) => (
  <div className="pt-4 pb-12">
    <div className="flex flex-row items-center justify-between">
      <p className={clsx("text-xl", "font-bold", themeClasses.textColor)}>
        {name}
      </p>
      <p className={clsx("text-sm", themeClasses.detailTextColor)}>{level}</p>
    </div>
    <div className="flex flex-row items-center pt-4">
      {keywords.map((keyword, index) => (
        <Pill key={index}>{keyword}</Pill>
      ))}
    </div>
  </div>
)
