import { useState } from "react"
import { Button } from "~/components/common/button"
import { Input, TextArea } from "~/components/common/form"
import { LoaderCore } from "~/components/common/LoaderCore"

interface Props {
  isError?: boolean
  errorMessage?: string
  successMessage?: string
  isSuccess?: boolean
  isLoading?: boolean
  onSubmit?: ({ signed, comment }: { signed: string; comment: string }) => void
}

const defaultError = "An Error Occurred Submitting Your Guestbook Entry."

const defaultSuccess = "Successfully Submitted Your Guestbook Entry"

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

  const handleClear = () => {
    setComment("")
    setSigned("")
  }

  return (
    <div className="flex flex-col relative">
      {isError && (
        <div className="bg-red-500 px-4 py-2 mt-2 mb-4 rounded-lg drop-shadow-md text-gray-900 text-lg font-medium">
          <p>{errorMessage ?? defaultError}</p>
        </div>
      )}
      {isSuccess && (
        <div className="bg-green-500 px-4 py-2 mt-2 mb-4 rounded-lg drop-shadow-md text-gray-900 text-lg font-medium mt-2">
          <p>{successMessage ?? defaultSuccess}</p>
        </div>
      )}
      <TextArea
        label="Your Comment"
        id="comment"
        placeholder="Type your comment for the guestbook..."
        onChange={value => setComment(value)}
        value={comment}
      />
      <Input
        id="signed"
        type="text"
        label="Display Name"
        placeholder="Enter the display name to show under your entry"
        value={signed}
        onChange={value => setSigned(value)}
      />

      <span className="inline-flex flex-row items-center gap-5">
        <Button
          transparent
          onClick={() => onSubmit && onSubmit({ comment, signed })}
        >
          Submit
        </Button>
        <Button noBorder transparent onClick={handleClear}>
          Clear
        </Button>
      </span>

      {isLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-tint-50 rounded-lg flex flex-row items-center justify-center">
          <div className="h-32 w-32">
            <LoaderCore />
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentBox
