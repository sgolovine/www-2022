import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { DOMAIN } from "~/config/domain"

interface Props {
  title: string
  description?: string
}

export const PageSEO: React.FC<Props> = ({ title, description }) => {
  const router = useRouter()
  const canonicalUrl = `${DOMAIN}/${router.pathname}`

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonicalUrl}
      openGraph={{ title, description, url: canonicalUrl, site_name: DOMAIN }}
      twitter={{ cardType: "summary_large_image" }}
    />
  )
}
