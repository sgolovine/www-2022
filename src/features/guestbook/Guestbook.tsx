import clsx from "clsx"
import { PageHeader } from "~/components/common/PageHeader"
import pageTitles from "~/config/navigation/pageTitles"
import { themeClasses } from "~/config/themeClasses"
import { StaticRoutes } from "~/model/Routes"
import CommentBox from "./components/CommentBox"
import labels from "~/labels.json"
import { Ledger } from "./components/Ledger"
import { useMutation, useQuery } from "@tanstack/react-query"
import { updateGuestbook } from "~/services/requests/updateGuestbook"
import { getGuestbook } from "~/services/requests/getGuestbook"
import { useEffect } from "react"
import { features } from "~/config/features"
import { useRouter } from "next/router"

const introClasses = clsx(themeClasses.textColor, "pb-4")

const Guestbook: React.FC = () => {
  const router = useRouter()

  const {
    mutate: submitComment,
    isLoading: submitCommentLoading,
    isError: submitCommentError,
    isSuccess: submitCommentSuccess,
  } = useMutation(updateGuestbook)

  const {
    isLoading: ledgerLoading,
    isError: ledgerError,
    data: ledgerData,
    refetch: refetchLedger,
  } = useQuery(["guestbook"], getGuestbook)

  useEffect(() => {
    refetchLedger()
  }, [refetchLedger, submitCommentSuccess])

  useEffect(() => {
    if (!features.showGuestbook) {
      router.push("/")
    }
  })

  return (
    <div className={themeClasses.container}>
      <PageHeader>{pageTitles[StaticRoutes.Guestbook]}</PageHeader>
      <p className={introClasses}>{labels.guestbook.intro}</p>
      <div>
        <CommentBox
          isLoading={submitCommentLoading}
          isError={submitCommentError}
          isSuccess={submitCommentSuccess}
          onSubmit={({ signed, comment }) => {
            submitComment({
              message: comment,
              author: signed,
            })
          }}
        />
      </div>
      <hr className="my-6" />
      <Ledger
        isLoading={ledgerLoading}
        isError={ledgerError}
        content={ledgerData?.data?.content}
      />
    </div>
  )
}

export default Guestbook
