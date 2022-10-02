import { useMemo } from "react"
import { Switch as HUISwitch } from "@headlessui/react"
import clsx from "clsx"

interface Props {
  enabled: boolean
  onChange: () => void
}

export const Switch: React.FC<Props> = ({ enabled, onChange }) => {
  const classes = useMemo(() => {
    return {
      switch: clsx(
        "relative",
        "inline-flex",
        "h-6",
        "w-11",
        "items-center",
        "rounded-full",
        {
          "bg-blue-600": enabled,
          "bg-gray-200": !enabled,
        }
      ),
      inside: clsx(
        "inline-block",
        "h-4",
        "w-4",
        "rounded-full",
        "bg-white",
        "transition",
        {
          "translate-x-6": enabled,
          "translate-x-1": !enabled,
        }
      ),
    }
  }, [enabled])

  return (
    <HUISwitch checked={enabled} onChange={onChange} className={classes.switch}>
      <span className={classes.inside} />
    </HUISwitch>
  )
}
