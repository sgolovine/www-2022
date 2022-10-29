import { useEffect, useState } from "react"
import { Button } from "~/components/common/button"
import { Input, TextArea } from "~/components/common/form"
import { IconButton } from "~/components/common/iconButton"
import labels from "~/labels.json"
import makeStyles from "./CommentBox.classes"

interface Props {
  isError?: boolean
  isSuccess?: boolean
  isLoading?: boolean
  onSubmit?: ({ signed, comment }: { signed: string; comment: string }) => void
}

const CommentBox: React.FC<Props> = ({
  isError,
  isLoading,
  isSuccess,
  onSubmit,
}) => {
  const [comment, setComment] = useState<string>("")
  const [signed, setSigned] = useState<string>("")
  const [showError, setShowError] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (isError) {
      setShowError(true)
    }
  }, [isError])

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true)
    }
  }, [isSuccess])

  const {
    container,
    errorContainer,
    successContainer,
    buttonContainer,
    errorButtonClasses,
    successButtonClasses,
  } = makeStyles()

  const handleClear = () => {
    setComment("")
    setSigned("")
  }

  return (
    <div className={container}>
      {showError && (
        <div className={errorContainer}>
          <p className="text-white">{labels.guestbook.defaultError}</p>
          <IconButton
            icon="close"
            buttonClasses={errorButtonClasses}
            iconClasses="text-white"
            onClick={() => setShowError(false)}
          />
        </div>
      )}
      {showSuccess && (
        <div className={successContainer}>
          <p className="text-gray-800">{labels.guestbook.defaultSuccess}</p>
          <IconButton
            icon="close"
            buttonClasses={successButtonClasses}
            iconClasses="text-gray-800 dark:text-gray-800"
            onClick={() => setShowSuccess(false)}
          />
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
          loading={isLoading}
        >
          {labels.guestbook.submitBtn}
        </Button>
        <Button noBorder transparent onClick={handleClear}>
          {labels.guestbook.clearBtn}
        </Button>
      </span>
    </div>
  )
}

export default CommentBox
