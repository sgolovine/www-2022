import { NextSeo } from "next-seo"
import { BlogPostMetadata } from "~/model/Post"

/** SEO Component for Blog Posts */
interface Props {
  metadata: BlogPostMetadata
}

// const createOgImages = (imageName: string) => {
//   return [
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-480.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-640.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-750.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-828.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-1080.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-1200.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-1920.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-2048.WEBP`,
//     },
//     {
//       url: `https://sunny.gg/images/posts/nextImageExportOptimizer/${imageName}-opt-3840.WEBP`,
//     },
//   ]
// }

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
