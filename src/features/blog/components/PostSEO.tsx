import { NextSeo } from "next-seo"
import { BlogPostMetadata } from "~/model/Post"

/** SEO Component for Blog Posts */
interface Props {
  metadata: BlogPostMetadata
}

const createOgImages = (imageName: string) => {
  return [
    {
      url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-10.WEBP`,
    },
  ]
}

export const PostSeo: React.FC<Props> = ({ metadata }) => {
  const canonicalUrl = `https://sunny.gg/post/${metadata.slug}`

  return (
    <NextSeo
      title={metadata.title}
      description={metadata.description}
      canonical={canonicalUrl}
      openGraph={{
        url: canonicalUrl,
        title: metadata.title,
        description: metadata.description,
      }}
    />
  )
}
