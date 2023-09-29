import { getPost } from "../models/posts.server"
import { useLoaderData } from '@remix-run/react'
import styles from "../styles/blog.css"
import {formatearFecha} from "../utils/helpers"

export async function loader({ params }) {
  const { postUrl } = params
  const post = await getPost(postUrl)

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    })

  }

  return post

}

export function meta({data}) {
  if(!data) {
    return [
      {
        title: `No encontrado`
      }
    ]
  }


  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`
    }
  ]
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export default function Post() {

  const post = useLoaderData()
  console.log(post)

  const { titulo, contenido, publishedAt, imagen } = post.data[0].attributes

  return (
    <article className="contenido post">

      <img src={imagen.data.attributes.url} alt="" />
      <div className="contenido">
          <h3> {titulo} </h3>
          <p className="fecha"> {formatearFecha(publishedAt)} </p>

          <p className="texto"> {contenido} </p>
      </div>


    </article>
  )
}
