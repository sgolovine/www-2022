import clsx from "clsx"
import { useMutation } from "react-query"
import { PageHeader } from "~/components/common/PageHeader"
import pageTitles from "~/config/navigation/pageTitles"
import { themeClasses } from "~/config/themeClasses"
import { Routes } from "~/model/Routes"
import { sendMessage } from "~/services/sendMessage"
import { Loader } from "~/stories/Loader.stories"
import { ContactForm } from "./ContactForm"
import { SubmitParams } from "./types/ContactForm"
import type { ContactPageProps } from "./types/ContactPageProps"

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  const introClasses = clsx(themeClasses.textColor, "py-2")

  const notificationBaseClasses = clsx(
    "py-4",
    "px-2",
    "rounded-lg",
    "drop-shadow-md",
    "font-medium",
    "dark:bg-slate-900",
    "dark:ring-2"
  )

  const { isLoading, isError, isSuccess, mutate, reset } =
    useMutation(sendMessage)

  const handleSubmit = (params: SubmitParams) => {
    mutate({
      name: params.name,
      email: params.email,
      subject: params.subject,
      message: params.message,
    })
  }

  return (
    <>
      <div className={themeClasses.container}>
        {isError && (
          <div
            className={clsx(
              notificationBaseClasses,
              "bg-red-500",
              "text-gray-50",
              "dark:ring-red-500",
              "mb-4"
            )}
          >
            <p>Error Sending Message</p>
          </div>
        )}
        {isSuccess && (
          <div
            className={clsx(
              notificationBaseClasses,
              "bg-green-500",
              "text-gray-900",
              "dark:text-gray-50",
              "dark:ring-green-500",
              "my-4"
            )}
          >
            <p>Successfully Sent Message.</p>
          </div>
        )}
        <PageHeader>{pageTitles[Routes.Contact]}</PageHeader>
        <p className={introClasses}>
          Fill out the form below to send me a message. Alternatively you can
          send me an email directly at: hey@sunny.gg
        </p>
        <div className="py-2">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
      <Loader visible={isLoading} onCancel={() => reset()} />
    </>
  )
}

export default ContactPage
