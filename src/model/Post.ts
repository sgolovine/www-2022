interface PostBase {
  type: "post" | "snippet"
  title: string
  description?: string
  tags?: string
  published: boolean
  slug: string
}

export interface BlogPost extends PostBase {
  date: string
  category?: string
  tags?: string
}

export interface Snippet extends PostBase {}

// Here, PostType will be either of type
// BlogPost or of type Snippet
export interface PostMap<PostType> {
  cwd: string
  data: {
    relativePath: string
    postMetadata: PostType
    postPreview?: string
  }[]
}

export interface ContentMap {
  posts: PostMap<BlogPost>
  snippets: PostMap<Snippet>
}
