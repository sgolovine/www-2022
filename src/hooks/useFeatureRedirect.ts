import { useEffect } from "react"
import { featureFlags } from "~/config/featureFlags"

export const useFeatureRedirect = ({
  url,
  flag,
}: {
  url: string
  flag: boolean
}) => {
  useEffect(() => {
    if (
      !flag &&
      typeof window !== undefined &&
      !featureFlags.disableFeatureRedirects
    ) {
      window.location.href = url
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
