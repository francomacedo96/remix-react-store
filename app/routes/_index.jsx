import { getGuitarras } from "~/models/guitarras.server.js"
import { getPosts } from "~/models/posts.server.js"
import { useLoaderData } from "@remix-run/react"
import { getCurso } from "~/models/curso.server.js"
import ListadoGuitarras from "../components/listadoGuitarras"
import ListadoPosts from "../components/listadoPosts"
import Curso from "../components/curso"
import stylesGuitarras from "../styles/guitarras.css"
import stylesBlog from "../styles/blog.css"
import stylesCurso from "../styles/curso.css"

export function meta(){
  return[{
      title:`Guitar LA - Index`,
      description: `Guitarras, venta de guitarras, blogs`
  }]        

}

export function links(){
  return[
      {
          rel: 'stylesheet',
          href: stylesGuitarras
      },
      {
          rel: 'stylesheet',
          href: stylesBlog
      },
      {
          rel: 'stylesheet',
          href: stylesCurso
      }
  ]
}

export async function loader() {

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  
  console.log(curso)

  return [
    guitarras.data,
    posts.data,
    curso.data
  ]

}

function Index() {

  const {guitarras, posts, curso} = useLoaderData()

  return (
    <>

      <main className="contenedor">

        <ListadoGuitarras
            guitarras={guitarras}

        />

      </main>

      <Curso
        curso={curso.attributes}
      />

      <section>
        <ListadoPosts
          posts={posts}
        />
      </section>

    </>
  )
}

export default Index