import { Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { useFeatures } from "~/context/FeaturesContext"
import { IconButton } from "../common/iconButton"
import Menu from "./Menu"

// This determines whether the button is visible on the UI

interface Props {
  // tells us whether or not to add extra padding.
  // or just render the iconbutton.
  homepage?: boolean
}

const DevMenu: React.FC<Props> = ({ homepage }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const { isFeatureEnabled } = useFeatures()

  const SHOW_MENU =
    isFeatureEnabled("alwaysShowDevMenu") ||
    process.env.NODE_ENV === "development"

  return (
    <>
      {SHOW_MENU ? (
        <>
          {homepage ? (
            <span className="pl-4">
              <IconButton
                onClick={() => setVisible(prev => !prev)}
                icon="terminal"
              />
            </span>
          ) : (
            <IconButton
              onClick={() => setVisible(prev => !prev)}
              icon="terminal"
            />
          )}
          <Transition as={Fragment} show={visible}>
            <div className="z-50 absolute bg-gray-50 top-14 right-5 left-5 md:left-auto md:right-auto md:w-128 h-192 rounded-lg drop-shadow-lg">
              <div className="p-4 bg-blue-500 rounded-tr-lg rounded-tl-lg">
                <p className="text-white font-medium">Dev Menu</p>
              </div>
              <div className="p-4">
                <Menu />
              </div>
            </div>
          </Transition>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default DevMenu
