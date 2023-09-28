import { getPosts } from "../models/posts.server"
import Post from "../components/post"
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

      <h2 className="heading">Blog</h2>
      <div className="blog">

        {posts.map(post =>  (
          <Post
              key={post.id}
              posts={post.attributes}
        ></Post>
        ))}

      </div>
    </main>
  )
}

export default Blog