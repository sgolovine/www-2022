import clsx from "clsx"

export function makeStyles({
  active = false,
  transparent = false,
  sm = false,
  noBorder = false,
}: Partial<
  Record<"active" | "transparent" | "sm" | "noBorder", boolean>
>): string {
  const baseClasses = clsx("font-medium", {
    // Border
    border: !noBorder,
    // Background
    "bg-blue-500": !transparent,
    "dark:bg-slate-700": !transparent,
    "dark:bg-slate-900": transparent,

    // Text
    "text-white": !transparent,
    "text-gray-700": transparent,
    "dark:text-gray-200": transparent,
    "dark:text-amber-500": active,

    // Borders
    "dark:border-slate-600": !transparent,
    "dark:border-slate-700": transparent,
    "dark:border-amber-400": transparent && active,

    // Padding
    "px-4": !sm,
    "py-2": !sm,
    "px-3": sm,
    "py-1": sm,

    // Radius
    "rounded-lg": !sm,
    "rounded-md": sm,
  })

  const hoverClasses = clsx({
    "hover:bg-blue-400": !transparent,
    "hover:bg-indigo-400": active && !transparent,
    "hover:bg-gray-100": transparent,
    "dark:hover:bg-slate-500": !transparent,
    "dark:hover:bg-slate-700": transparent,
  })

  const activeClasses = clsx("dark:active:hover:bg-slate-800", {
    // When the button is pressed in
    "active:bg-blue-700": !transparent,
    "active:bg-gray-300": transparent,
    "active:bg-indigo-600": active && !transparent,

    // For when the button is an "active" state
    // (ie. the current route)
    "bg-indigo-500": active && !transparent,
    "text-blue-500": active && transparent,
    "text-gray-800": active && transparent,
  })

  return clsx(baseClasses, hoverClasses, activeClasses)
}
