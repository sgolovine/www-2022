import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import { LicenseTypes } from "../../model/ProjectPageTemplateProps"

export default function makeStyles(licenseType: LicenseTypes) {
  const container = clsx("max-w-4xl", "mx-auto")

  const headerContainer = clsx(
    "flex",
    "flex-col",
    "sm:flex-row",
    "sm:items-center",
    "items-start",
    "justify-start",
    "sm:justify-between",
    "pb-4"
  )

  const headerTitleContainer = clsx("flex", "flex-row", "items-center", "gap-4")

  const headerTitle = clsx("text-4xl", "font-black", themeClasses.headerColor)

  const licenseChip = clsx(
    "border",
    "p-1",
    "text-center",
    "rounded-full",
    "text-xs",
    "w-24",
    {
      "text-green-700": licenseType === LicenseTypes.OpenSource,
      "text-red-700": licenseType === LicenseTypes.Proprietary,
      "border-green-500": licenseType === LicenseTypes.OpenSource,
      "border-red-500": licenseType === LicenseTypes.Proprietary,
    }
  )

  const licenseChipContainer = clsx(
    "flex",
    "flex-row",
    "items-center",
    "sm:justify-end",
    "py-2"
  )

  const linkContainer = clsx("flex", "flex-row", "items-center", "gap-2")

  const introContainer = clsx("pt-2")

  const introText = clsx("text-lg", themeClasses.textColor)

  const urlText = clsx("py-2", "text-sm", themeClasses.linkColor)

  const urlIcon = clsx("h-6", "w-6", themeClasses.textColor)

  const dateText = clsx(
    "text-sm",
    "sm:text-right",
    themeClasses.detailTextColor
  )

  const sectionContainer = clsx("py-6")

  const sectionHeaderText = clsx(
    "text-2xl",
    "font-black",
    themeClasses.headerColor
  )

  const techStackCategoryContainer = clsx("py-4")

  const techStackSectionHeaderText = clsx(
    "text-xl",
    "font-bold",
    themeClasses.headerColor
  )

  const techStackItemsContainer = clsx(
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "gap-5",
    "py-2"
  )

  const techStackItemContainer = clsx(
    "border",
    "p-2",
    "rounded-lg",
    "flex",
    "flex-row",
    "items-center",
    "gap-2"
  )

  const techStackItemHeaderText = clsx("text-lg", themeClasses.textColor)

  const techStackItemDescriptionText = clsx(
    "text-sm",
    themeClasses.detailTextColor
  )

  const techStackItemIcon = clsx("h-8", "w-8", themeClasses.iconColor)

  const galleryGridContainer = clsx("grid", "grid-cols-2")
  const galleryImageContainer = clsx("relative", "relative-img-container")
  const galleryImageComponent = clsx("relative-img")
  const galleryImageOverlayContainer = clsx(
    "absolute",
    "top-0",
    "left-0",
    "right-0",
    "bottom-0",
    "opacity-0",
    "hover:bg-gray-800",
    "hover:opacity-60",
    "transition-all",
    "rounded-lg",
    "flex",
    "flex-row",
    "items-center",
    "justify-center"
  )
  const galleryImageOverlayIcon = clsx("h-12", "w-12", "text-white", "z-50")

  return {
    container,
    licenseChip,
    headerContainer,
    headerTitle,
    headerTitleContainer,
    linkContainer,
    licenseChipContainer,
    introContainer,
    introText,
    sectionContainer,
    sectionHeaderText,
    techStackCategoryContainer,
    techStackSectionHeaderText,
    techStackItemsContainer,
    techStackItemContainer,
    techStackItemHeaderText,
    techStackItemDescriptionText,
    urlText,
    dateText,
    urlIcon,
    techStackItemIcon,
    galleryGridContainer,
    galleryImageComponent,
    galleryImageContainer,
    galleryImageOverlayContainer,
    galleryImageOverlayIcon,
  }
}
