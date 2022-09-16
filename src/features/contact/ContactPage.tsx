import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
import type { ContactPageProps } from "./types/ContactPageProps"

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  const headerClasses = clsx(themeClasses.headerColor, themeClasses.bigHeader)
  const introClasses = clsx(themeClasses.textColor, "py-2")

  return (
    <div className={themeClasses.container}>
      <h1 className={headerClasses}>Contact Me</h1>
      <p className={introClasses}>
        Fill out the form below to send me a message. Alternatively you can send
        me an email directly at: hey@sunny.gg
      </p>
    </div>
  )
}

export default ContactPage
