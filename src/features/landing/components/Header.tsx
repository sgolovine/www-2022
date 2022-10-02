import { DevMenu } from "~/components/devMenu"
import ThemeSwitch from "~/components/layout/themeSwitch/ThemeSwitch"

export const Header: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-end p-4">
      <ThemeSwitch />
      <DevMenu homepage />
    </div>
  )
}
