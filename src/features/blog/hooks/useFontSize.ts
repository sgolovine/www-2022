import clsx from "clsx"
import { useMemo, useState } from "react"

export const useFontSize = () => {
  // 1: prose-sm
  // 2: prose-base (default)
  // 3: prose-lg
  // 4: prose-xl
  // 5: prose-2xl
  const [fontSize, setFontSize] = useState<number>(2)

  const handleFontSizeIncrease = () => {
    if (fontSize < 5) {
      setFontSize(previousFontSize => previousFontSize + 1)
    }
  }

  const handleFontSizeDecrease = () => {
    if (fontSize > 1) {
      setFontSize(previousFontSize => previousFontSize - 1)
    }
  }

  const proseClasses = useMemo(
    () =>
      clsx("prose", "dark:prose-invert", {
        "prose-sm": fontSize === 1,
        "prose-base": fontSize === 2,
        "prose-lg": fontSize === 3,
        "prose-xl": fontSize === 4,
        "prose-2xl": fontSize === 5,
      }),
    [fontSize]
  )

  return {
    handleFontSizeDecrease,
    handleFontSizeIncrease,
    proseClasses,
  }
}
