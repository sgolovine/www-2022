import { Image } from "~/components/Image"

interface Props {
  src?: string
  alt?: string
}

const PostImage: React.FC<Props> = ({ src, alt }) => {
  const imgSrc = `/images/posts/${src}`

  return (
    <div className="blog-post-image-container rounded-lg drop-shadow-lg">
      <Image
        src={imgSrc}
        alt={alt}
        layout="fill"
        className="blog-post-image-component rounded-lg drop-shadow-lg"
      />
    </div>
  )
}

export default PostImage
