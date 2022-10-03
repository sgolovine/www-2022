// Metadata that is common to both
// Blog posts and snippets
export interface PostMetadataBase {
  type: "post" | "snippet"
  title: string
  description?: string
  tags?: string
  published: boolean
  slug: string
}

export interface BlogPostMetadata extends PostMetadataBase {
  date: string
  category?: string
  headerImage?: string
  socialImages: Record<
    "path" | "relativePath" | "height" | "width" | "type",
    string
  >[]
}

export interface ContentMapCategory {
  label: string
  value: string
}

export type ContentMapData<PT> = {
  relativePath: string
  postMetadata: PT
  postPreview?: string
}

export type PostMap = ContentMapData<BlogPostMetadata>[]
export type SnippetMap = ContentMapData<PostMetadataBase>[]

export interface ContentMap {
  posts: PostMap
  snippets: SnippetMap
  postCategories: ContentMapCategory[]
  postTags: string[]
}
