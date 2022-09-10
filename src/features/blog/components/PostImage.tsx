import { Image } from "~/components/Image"

interface Props {
  src: string
  alt?: string
}

export const PostImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className="blog-post-image-container">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className="blog-post-image-component"
      />
    </div>
  )
}
