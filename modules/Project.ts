export interface IProject {
  title: string
  categoryId: number
  description: string
  published: boolean
  technologies: string[]
  images: IImage[]
}

export interface IImage {
  id: string
  url: string
}
