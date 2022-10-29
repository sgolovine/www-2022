import { LoaderCore } from "~/components/common/LoaderCore"
import makeStyles from "./CommentBox.classes"
import labels from "~/labels.json"
import clsx from "clsx"
import { themeClasses } from "~/config/themeClasses"
interface Props {
  isLoading: boolean
  isError: boolean
  content: string
}

export const Ledger: React.FC<Props> = ({ isLoading, isError, content }) => {
  const { errorContainer } = makeStyles()
  return (
    <>
      {isError ? (
        <div className={errorContainer}>
          <p className="text-white">{labels.guestbook.ledgerFetchError}</p>
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center">
          <div className="h-32 w-32">
            <LoaderCore />
          </div>
        </div>
      ) : (
        <div className="ledger-container">
          <pre className={clsx("whitespace-pre-wrap", themeClasses.textColor)}>
            {content}
          </pre>
        </div>
      )}
    </>
  )
}
