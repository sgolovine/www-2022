import { defaultFeatures as featureFlags } from "~/config/defaultFeatures"

const envs = [
  {
    label: "NODE_ENV",
    value: process.env.NODE_ENV,
  },
]

const Menu = () => {
  const renderFeatureFlags = () => {
    return (
      <>
        {Object.keys(featureFlags).map(flag => {
          const valueLabel = featureFlags[flag as keyof typeof featureFlags]
            ? "ON"
            : "OFF"

          return (
            <span
              key={flag}
              className="flex flex-row items-center justify-between py-3"
            >
              <p className="font-medium text-sm">{flag}</p>
              <p className="font-mono text-sm">{valueLabel}</p>
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
