import { addons } from "@storybook/addons"

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: false,
  enableShortcuts: false,
  showToolbar: true,
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
  },
})
