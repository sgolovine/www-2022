import LinkButton from "./components/LinkButton"
import PageHeader from "./components/PageHeader"
import ProfilePicture from "./components/ProfilePicture"
import SocialButton from "./components/SocialButton"
import labels from "~/labels.json"
import { featureFlags } from "~/config/featureFlags"
import { Punk } from "~/components/punk"
import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import appRoutes from "~/config/navigation/appRoutes"
import socialMediaConfig from "~/config/socialMedia"
import { useMemo } from "react"

const LandingPage: React.FC = () => {
  const links = useMemo(
    () => appRoutes.filter(route => route.showOnHomepage),
    []
  )

  const socialLinks = useMemo(
    () =>
      Object.keys(socialMediaConfig).map(key => ({
        id: key,
        ...socialMediaConfig[key as keyof typeof socialMediaConfig],
      })),
    []
  )

  return (
    <div className={clsx(themeClasses.container, "pt-12", "px-4", "pb-4")}>
      {featureFlags.showPunkOnLandingPage ? (
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
  )
}

export default LandingPage
