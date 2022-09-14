import React from "react"
import PunkSVG from "./PunkSVG"
import { usePunk } from "./usePunk"
import Image from "next-image-export-optimizer"
import PunkCSS from "./Punk.module.css"

const eyesImage = "/images/eyes.png"
const sunglassesImage = "/images/sunglasses.png"

const Punk = () => {
  const {
    eyeColorLeft,
    eyeColorRight,
    bgColor,
    onBackgroundClick,
    toggleShades,
    showShades,
  } = usePunk()

  return (
    <div className={PunkCSS.PunkBorderContainer}>
      <div
        onClick={onBackgroundClick}
        className={PunkCSS.PunkContainer}
        style={{ backgroundColor: bgColor }}
      >
        <div className={PunkCSS.PunkContainerTop}>
          <button
            type="button"
            className={PunkCSS.PunkButton}
            onClick={toggleShades}
          >
            <div>
              {showShades ? (
                <Image src={eyesImage} alt="eyes" height={48} width={48} />
              ) : (
                <Image
                  src={sunglassesImage}
                  alt="shades"
                  height={48}
                  width={48}
                />
              )}
              {/* TODO: Fix Images  */}
            </div>
          </button>
        </div>
        <div className={PunkCSS.PunkContainerBottom}>
          <div className={PunkCSS.PunkSvgContainer}>
            <PunkSVG
              showShades={showShades}
              eyeColorLeft={eyeColorLeft}
              eyeColorRight={eyeColorRight}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Punk
