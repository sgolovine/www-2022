import { useState } from "react"
import { Button } from "~/components/common/button"
import { Input, TextArea } from "~/components/common/form"
import { LoaderCore } from "~/components/common/LoaderCore"
import labels from "~/labels.json"
import makeStyles from "./CommentBox.classes"

interface Props {
  isError?: boolean
  errorMessage?: string
  successMessage?: string
  isSuccess?: boolean
  isLoading?: boolean
  onSubmit?: ({ signed, comment }: { signed: string; comment: string }) => void
}

const CommentBox: React.FC<Props> = ({
  isError,
  isLoading,
  isSuccess,
  errorMessage,
  successMessage,
  onSubmit,
}) => {
  const [comment, setComment] = useState<string>("")
  const [signed, setSigned] = useState<string>("")

  const {
    container,
    errorContainer,
    successContainer,
    buttonContainer,
    loaderContainer,
  } = makeStyles()

  const handleClear = () => {
    setComment("")
    setSigned("")
  }

  return (
    <div className={container}>
      {isError && (
        <div className={errorContainer}>
          <p>{errorMessage ?? labels.guestbook.defaultError}</p>
        </div>
      )}
      {isSuccess && (
        <div className={successContainer}>
          <p>{successMessage ?? labels.guestbook.defaultSuccess}</p>
        </div>
      )}
      <TextArea
        label={labels.guestbook.entryLabel}
        id="comment"
        placeholder={labels.guestbook.entryPlaceholder}
        onChange={value => setComment(value)}
        value={comment}
      />
      <Input
        id="signed"
        type="text"
        label={labels.guestbook.displayNameLabel}
        placeholder={labels.guestbook.displayNamePlaceholder}
        value={signed}
        onChange={value => setSigned(value)}
      />

      <span className={buttonContainer}>
        <Button
          transparent
          onClick={() => onSubmit && onSubmit({ comment, signed })}
        >
          {labels.guestbook.submitBtn}
        </Button>
        <Button noBorder transparent onClick={handleClear}>
          {labels.guestbook.clearBtn}
        </Button>
      </span>

      {isLoading && (
        <div className={loaderContainer}>
          <div className="h-32 w-32">
            <LoaderCore />
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentBox
