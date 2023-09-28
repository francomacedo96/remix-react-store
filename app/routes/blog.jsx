import { getPosts } from "../models/posts.server"
import Posts from "../components/posts"
import { useLoaderData } from "@remix-run/react"

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
          <Posts
          key={post.id}
          posts={post}
        ></Posts>
        ))}


        
      </div>
    </main>
  )
}

export default Blog