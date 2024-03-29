import LinkButton from "./components/LinkButton"
import PageHeader from "./components/PageHeader"
import ProfilePicture from "./components/ProfilePicture"
import SocialButton from "./components/SocialButton"
import labels from "~/labels.json"
import { Punk } from "~/components/punk"
import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import useAppRoutes from "~/config/navigation/useAppRoutes"
import socialMediaConfig from "~/config/socialMedia"
import { useMemo } from "react"
import { Header } from "./components/Header"
import { features } from "~/config/features"

const LandingPage: React.FC = () => {
  const appRoutes = useAppRoutes()
  const links = appRoutes.filter(route => route.showOnHomepage)

  const socialLinks = useMemo(
    () =>
      Object.keys(socialMediaConfig).map(key => ({
        id: key,
        ...socialMediaConfig[key as keyof typeof socialMediaConfig],
      })),
    []
  )

  return (
    <>
      <Header />
      <div className={clsx(themeClasses.container, "pt-12", "px-4", "pb-4")}>
        {features.showPunkOnLandingPage ? (
          <div className="flex flex-row items-center justify-center">
            <Punk />
          </div>
        ) : (
          <ProfilePicture />
        )}
        <PageHeader
          title={labels.landingPage.header}
          bio={labels.landingPage.bio}
        />

        {/* Links List */}
        <div className="pt-4 grid grid-cols-1 grid-rows-auto gap-5">
          {links.map(link => (
            <LinkButton
              key={link.id}
              href={link.link}
              title={link.title}
              icon={link.icon}
            />
          ))}
        </div>

        {/* Social Bar */}
        <div className="flex flex-row items-center justify-evenly pt-8">
          {socialLinks.map(link => (
            <SocialButton key={link.id} href={link.href} icon={link.icon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default LandingPage
