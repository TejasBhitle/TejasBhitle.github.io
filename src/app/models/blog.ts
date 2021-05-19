export interface Blog{
    index: string
    slug: string
    name: string
    publishDate: string
    content: BlogContent[]
  }
  
  export interface BlogContent{
    index: number
    text?: string
    image?: string
  }
  