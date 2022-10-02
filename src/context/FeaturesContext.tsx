import { createContext, ReactNode, useContext } from "react"
import { defaultFeatures, FEATURES_VERSION } from "~/config/defaultFeatures"
import useLocalStorage from "~/hooks/useLocalStorage"

const StorageKey = `features_v${FEATURES_VERSION}`

type Flag = keyof typeof defaultFeatures
type Features = Record<Flag, boolean>

interface FeaturesContext {
  features: Features
  setFeatureFlag: (flag: Flag, newValue: boolean) => void
  isFeatureEnabled: (flag: Flag) => boolean
}

const FeaturesContext = createContext<FeaturesContext>({} as FeaturesContext)

export const FeaturesContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [features, setFeatures] = useLocalStorage<Features>(
    StorageKey,
    defaultFeatures
  )

  const setFeatureFlag = (flag: Flag, newValue: boolean) => {
    setFeatures({
      ...features,
      [flag]: newValue,
    })
  }

  const isFeatureEnabled = (flag: Flag): boolean => {
    return features[flag] ?? false
  }

  return (
    <FeaturesContext.Provider
      value={{ features, setFeatureFlag, isFeatureEnabled }}
    >
      {children}
    </FeaturesContext.Provider>
  )
}

export const useFeatures = () => {
  return useContext(FeaturesContext)
}
