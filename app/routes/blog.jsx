import { getPosts } from "../models/posts.server"
import ListadoPosts from "../components/listadoPosts"
import { useLoaderData } from "@remix-run/react"
import styles from "~/styles/blog.css"

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()
  console.log(posts)

  return (
    <main className="contenedor">

      <ListadoPosts
        posts={posts}
      />
      
    </main>
  )
}

export default Blog