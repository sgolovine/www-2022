import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

export const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useLocalStorage<boolean>(
    "dark-theme-v1",
    false
  )

  useEffect(() => {
    if (darkTheme) {
      enableDarkTheme()
    } else {
      disableDarkTheme()
    }
  }, [darkTheme])

  const enableDarkTheme = () => {
    if (typeof document !== undefined) {
      document.body.classList.add("dark")
    }
  }

  const disableDarkTheme = () => {
    if (typeof document !== undefined) {
      document.body.classList.remove("dark")
    }
  }

  const toggleDarkTheme = () => setDarkTheme(prev => !prev)

  return {
    enableDarkTheme,
    disableDarkTheme,
    toggleDarkTheme,
    isDark: darkTheme,
  }
}
