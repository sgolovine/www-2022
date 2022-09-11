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
  headerImage?: string
}

export interface Snippet extends PostBase {}

export type PostMapData<PT> = {
  relativePath: string
  postMetadata: PT
  postPreview?: string
}

// Here, PostType will be either of type
// BlogPost or of type Snippet
export interface PostMap<PT> {
  cwd: string
  data: PostMapData<PT>[]
}

export interface ContentMap {
  posts: PostMap<BlogPost>
  snippets: PostMap<Snippet>
}
