export interface post {
  userId: string
  id: string
  title: string
  body: string
}

export interface postState {
  posts: post[]
  page: number
}
