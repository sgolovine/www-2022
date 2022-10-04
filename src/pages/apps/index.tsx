import AppsLayout from "~/components/apps/AppsLayout"
import { AppPage } from "~/model/PageProps"
import labels from "~/labels.json"
import { appTitles } from "~/config/navigation/apps"
import { ListItem } from "~/components/listItem"
import { useRouter } from "next/router"

const Page: AppPage = () => {
  // titles are keyed by the route.
  const appRoutes = Object.keys(appTitles)
  const router = useRouter()

  return (
    <div>
      <p>{labels.apps.landing.intro}</p>
      <div className="py-4">
        {appRoutes.map(route => {
          const pageData = appTitles[route as keyof typeof appTitles]
          return (
            <ListItem
              key={route}
              title={pageData.title}
              description={pageData.description}
              onClick={() => router.push(route)}
              noEllipsis
            />
          )
        })}
      </div>
    </div>
  )
}

// SEO Component is inside AppsLayout.
Page.getLayout = page => (
  <AppsLayout
    appName={labels.apps.landing.header}
    appDescription={labels.apps.landing.intro}
  >
    {page}
  </AppsLayout>
)

export default Page
