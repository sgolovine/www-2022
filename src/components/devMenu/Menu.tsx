import { useFeatures } from "~/context/FeaturesContext"
import { Switch } from "../common/Switch"

const envs = [
  {
    label: "NODE_ENV",
    value: process.env.NODE_ENV,
  },
]

const Menu = () => {
  const features = useFeatures()
  const renderFeatureFlags = () => {
    return (
      <>
        {Object.keys(features.features).map(flag => {
          const enabled =
            features.features[flag as keyof typeof features.features]

          console.log(flag, enabled)
          return (
            <span
              key={flag}
              className="flex flex-row items-center justify-between py-3"
            >
              <p className="font-medium text-sm">{flag}</p>
              <Switch
                enabled={enabled}
                onChange={() =>
                  features.setFeatureFlag(
                    flag as keyof typeof features.features,
                    !enabled
                  )
                }
              />
            </span>
          )
        })}
      </>
    )
  }
  const renderEnvs = () => {
    return (
      <>
        {envs.map((env, index) => {
          return (
            <span
              key={index}
              className="flex flex-row items-center justify-between py-3"
            >
              <p className="font-medium text-sm">{env.label}</p>
              <p className="font-mono text-sm">{env.value}</p>
            </span>
          )
        })}
      </>
    )
  }

  return (
    <>
      <div className="py-4">
        <h2 className="text-left font-medium text-sm uppercase">
          Environment Variables
        </h2>
        <hr className="my-2" />
        {renderEnvs()}
      </div>
      <div className="py-4">
        <h2 className="text-left font-medium text-sm uppercase">
          Feature Flags
        </h2>
        <hr className="my-2" />
        {renderFeatureFlags()}
      </div>
    </>
  )
}

export default Menu
