interface PostBase {
  title: string
  description: string
  tags: string
  published: boolean
}

export interface BlogPost extends PostBase {
  date: string
  category: string
  tags: string
}

export interface Snippet extends PostBase {}

export interface PostMap<PostType> {
  cwd: string
  data: {
    relativePath: string
    postMetadata: PostType
    postPreview: string
  }[]
}

export interface ContentMap {
  posts: PostMap<BlogPost>
  snippets: PostMap<Snippet>
}
