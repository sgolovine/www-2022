import clsx from "clsx"
import { PageHeader } from "~/components/common/PageHeader"
import pageTitles from "~/config/navigation/pageTitles"
import { themeClasses } from "~/config/themeClasses"
import { Routes } from "~/model/Routes"
import { ContactForm } from "./ContactForm"
import type { ContactPageProps } from "./types/ContactPageProps"

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  const introClasses = clsx(themeClasses.textColor, "py-2")

  return (
    <div className={themeClasses.container}>
      <PageHeader>{pageTitles[Routes.Contact]}</PageHeader>
      <p className={introClasses}>
        Fill out the form below to send me a message. Alternatively you can send
        me an email directly at: hey@sunny.gg
      </p>
      <div className="py-2">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
