import { post } from '~/types/postStore'

async function getJson<T>(url: string): Promise<T> {
  const req = await fetch(url)
  const json = await req.json()
  return <T>json
}

interface getPostArg {
  page: number
}

async function getPosts(arg: getPostArg): Promise<post[]> {
  const url = `https://jsonplaceholder.typicode.com/posts?page=${arg.page}`
  const res = await getJson<post[]>(url)
  return res
}

export default getPosts
