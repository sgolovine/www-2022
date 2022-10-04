import { NextSeo } from "next-seo"
import { PostMetadataBase } from "~/model/Post"
import { DOMAIN } from "~/config/domain"

/** SEO Component for Blog Posts */
interface Props {
  metadata: PostMetadataBase
}

export const SnippetSEO: React.FC<Props> = ({ metadata }) => {
  const canonicalUrl = `https://${DOMAIN}/snippet/${metadata.slug}`

  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.description}
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: canonicalUrl,
          title: metadata.title,
          description: metadata.description,
          site_name: DOMAIN,
          article: {
            authors: ["Sunny Golovine"],
          },
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
    </>
  )
}
