import { useDarkTheme } from "~/hooks/useDarkTheme"
import { getIcon } from "~/components/icons"
import { Switch } from "~/components/common/Switch"

const SunIcon = getIcon("sun")
const MoonIcon = getIcon("moon")

const ThemeSwitch = () => {
  const { isDark, toggleDarkTheme } = useDarkTheme()
  return (
    <div className="flex flex-row items-center">
      <span className="mr-4">
        {isDark ? (
          <MoonIcon className="h-6 w-6 fill-gray-50" />
        ) : (
          <SunIcon className="h-6 w-6 fill-gray-800" />
        )}
      </span>
      <Switch enabled={isDark} onChange={toggleDarkTheme} />
    </div>
  )
}

export default ThemeSwitch
