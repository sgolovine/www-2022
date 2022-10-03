import { ArticleJsonLd, NextSeo } from "next-seo"
import { BlogPostMetadata } from "~/model/Post"
import dayjs from "dayjs"

/** SEO Component for Blog Posts */
interface Props {
  metadata: BlogPostMetadata
}

export const PostSeo: React.FC<Props> = ({ metadata }) => {
  const canonicalUrl = `https://sunny.gg/post/${metadata.slug}`
  const publishedTime = dayjs(metadata.date).toISOString()

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
          site_name: "sunny.gg",
          article: {
            publishedTime,
            authors: ["Sunny Golovine"],
            section: metadata.category,
          },
          images: metadata.socialImages.map(image => {
            return {
              url: `https://sunny.gg/${image.relativePath}`,
              width: image.width,
              height: image.height,
              alt: "Header Image",
              type: `image/${image.type}`,
            }
          }),
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={canonicalUrl}
        title={metadata.title}
        images={metadata.socialImages.map(
          img => `https://sunny.gg/${img.relativePath}`
        )}
        datePublished={publishedTime}
        authorName={[
          {
            name: "Sunny Golovine",
            url: "https://sunny.gg",
          },
        ]}
        publisherLogo="https://sunny.gg/images/profile_picture.png"
        description={metadata.description ?? ""}
      />
    </>
  )
}
