import LinkButton from "./components/LinkButton"
import PageHeader from "./components/PageHeader"
import ProfilePicture from "./components/ProfilePicture"
import SocialButton from "./components/SocialButton"
import { links } from "./config/links"
import { socialLinks } from "./config/socialLinks"
import { strings } from "./config/strings"

const LandingPage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto pt-8">
      <ProfilePicture />
      <PageHeader title={strings.header} bio={strings.bio} />

      {/* Links List */}
      <div className="pt-4 grid grid-cols-1 grid-rows-auto gap-5">
        {links.map(link => (
          <LinkButton
            key={link.id}
            href={link.href}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </div>

      {/* Social Bar */}
      <div className="flex flex-row items-center justify-evenly pt-8">
        {socialLinks.map(link => (
          <SocialButton key={link.id} {...link} />
        ))}
      </div>
    </div>
  )
}

export default LandingPage
