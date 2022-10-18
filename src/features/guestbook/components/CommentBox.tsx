import clsx from "clsx"
import { useState } from "react"
import { Button } from "~/components/common/button"
import { LoaderCore } from "~/components/common/LoaderCore"
import { themeClasses } from "~/config/themeClasses"

interface Props {
  isError?: boolean
  errorMessage?: string
  successMessage?: string
  isSuccess?: boolean
  isLoading?: boolean
  onSubmit?: ({ signed, value }: { signed: string; value: string }) => void
}

const defaultError = "An Error Occurred Submitting Your Comment."

const defaultSuccess = "Successfully Submitted Your Comment."

const CommentBox: React.FC<Props> = ({
  isError,
  isLoading,
  isSuccess,
  errorMessage,
  successMessage,
  onSubmit,
}) => {
  const [value, setValue] = useState<string>("")
  const [signed, setSigned] = useState<string>("")

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
      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        rows={10}
        className={clsx(
          themeClasses.textColor,
          "border",
          "bg-gray-50",
          "dark:bg-slate-800",
          "rounded-lg",
          "drop-shadow-sm",
          "border-2",
          "p-2",
          "text-lg",
          "font-medium"
        )}
        placeholder="Type your comment for the guestbook..."
      />
      <input
        className={clsx(
          themeClasses.textColor,
          "mt-4",
          "border",
          "bg-gray-50",
          "dark:bg-slate-800",
          "rounded-lg",
          "drop-shadow-sm",
          "border-2",
          "p-2",
          "text-lg",
          "font-medium"
        )}
        placeholder="Signed"
        value={signed}
        onChange={e => setSigned(e.target.value)}
      />
      <span className="pt-4 inline-flex flex-row items-center gap-5">
        <Button
          transparent
          onClick={() => onSubmit && onSubmit({ value, signed })}
        >
          Submit
        </Button>
        <Button noBorder transparent onClick={() => setValue("")}>
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
