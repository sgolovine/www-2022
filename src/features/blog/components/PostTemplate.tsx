import { BlogPost, Snippet } from "~/model/Post"

interface Props {
  data: BlogPost | Snippet
}

const PostTemplate: React.FC<Props> = ({ data }) => {
  const isSnippet = data.type === "snippet"

  return (
    <div className="max-w-lg mx-auto">
      <h1>{data.title}</h1>
    </div>
  )
}

export default PostTemplate
