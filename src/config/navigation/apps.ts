import labels from "~/labels.json"

export enum AppRoutes {
  TemplateApp = "/apps/template",
}

type PageTitles = {
  [K in AppRoutes]: {
    title: string
    description: string
  }
}

export const appTitles: PageTitles = {
  [AppRoutes.TemplateApp]: {
    title: labels.apps.template.header,
    description: labels.apps.template.intro,
  },
}
