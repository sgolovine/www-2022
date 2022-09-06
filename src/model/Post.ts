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
  postPreview: string
}

export interface Snippet extends PostBase {}

export interface PostMap {
  posts: {
    cwd: string
    data: {
      relativePath: string
      postMetadata: BlogPost
    }[]
  }
  snippets: {
    cwd: string
    data: {
      relativePath: string
      postMetadata: Snippet
    }[]
  }
}
