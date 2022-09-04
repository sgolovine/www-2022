import { useEffect } from "react"
import useLocalStorage from "~/hooks/useLocalStorage"

const ThemeSwitch: React.FC = () => {
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

  return (
    <div className="top-2 right-2 absolute">
      <input
        type="checkbox"
        className="toggle"
        checked={darkTheme}
        onChange={toggleDarkTheme}
      />
    </div>
  )
}

export default ThemeSwitch
