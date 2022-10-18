import { PageLayout } from "~/components/layout"
import PersonalWebsite, {
  PersonalWebsiteProps,
} from "~/features/projects/pages/PersonalWebsite"
import { AppPage, StaticProps } from "~/model/PageProps"
import { getProject } from "~/services/node/getProject.node"

const Page: AppPage<PersonalWebsiteProps> = props => {
  return <PersonalWebsite {...props} />
}

Page.getLayout = page => <PageLayout>{page}</PageLayout>

export const getStaticProps = async (): StaticProps<PersonalWebsiteProps> => {
  const project = await getProject<PersonalWebsiteProps>(
    "sunny-gg/config.json",
    "personal-website",
    "sunny-gg/intro.md"
  )

  return {
    props: {
      ...project,
    },
  }
}

export default Page
