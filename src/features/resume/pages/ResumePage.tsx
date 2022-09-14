import React from "react"
import { WorkItem } from "../components/WorkItem"
import { ProjectItem } from "../components/ProjectItem"
import { EducationItem } from "../components/EducationItem"
import { SkillsItem } from "../components/SkillsItem"
import { ResumePageProps } from "../types/ResumePageProps"
import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"

const sectionHeaderClasses = clsx(
  "text-2xl",
  "font-medium",
  themeClasses.headerColor
)

const ResumePage: React.FC<ResumePageProps> = ({ data }) => (
  <div className="max-w-3xl mx-auto my-4 px-4">
    <div>
      <h1 className={clsx(themeClasses.headerColor, "text-3xl")}>
        {data.basics.name}
      </h1>
      <p className={clsx(themeClasses.detailTextColor, "text-sm", "pt-2")}>
        {data.basics.label}
      </p>
      <p className={clsx(themeClasses.detailTextColor, "text-sm", "pt-1")}>
        {data.basics.location.city}, {data.basics.location.region}
      </p>
    </div>
    <div className="py-4 pt-6">
      <h2 className={sectionHeaderClasses}>Summary</h2>
      <div className="pt-4 pb-12">
        {data.basics.summary.map((paragraph, index) => (
          <p className={clsx(themeClasses.textColor, "pb-4")} key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>

    <div className="py-4">
      <h2 className={sectionHeaderClasses}>Work</h2>
      {data.work.map((workItem, index) => (
        <WorkItem
          key={index}
          name={workItem.name}
          startDate={workItem.startDate}
          endDate={workItem.endDate}
          url={workItem.url}
          positions={workItem.positions}
        />
      ))}
    </div>
    <div className="py-4">
      <h2 className={sectionHeaderClasses}>Projects</h2>
      <div className="py-4">
        {data.projects.map((item, index) => (
          <ProjectItem
            key={index}
            name={item.name}
            description={item.description}
            highlights={item.highlights}
            keywords={item.keywords}
          />
        ))}
      </div>
    </div>
    <div className="py-4">
      <h2 className={sectionHeaderClasses}>Skills</h2>
      {data.skills.map((skillsItem, index) => (
        <SkillsItem
          key={index}
          name={skillsItem.name}
          level={skillsItem.level}
          keywords={skillsItem.keywords}
        />
      ))}
    </div>
    <div className="py-4">
      <h2 className={sectionHeaderClasses}>Education</h2>
      <div className="py-4">
        {data.education.map((item, index) => (
          <EducationItem
            key={index}
            institution={item.institution}
            url={item.url}
            area={item.area}
            studyType={item.studyType}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </div>
    </div>
  </div>
)

export default ResumePage
