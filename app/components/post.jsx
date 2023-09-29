import { Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

function Post({posts}) {


    const { contenido, imagen, titulo, url, publishedAt } = posts
    console.log(posts)

  return (
    <article className="post">
        
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt="" />

        <div className="contenido">

            <h3> {titulo} </h3>
          <p className="fecha"> {formatearFecha(publishedAt)} </p>

            <p className="resumen"> {contenido} </p>
            <Link className="enlace" to={`/post/${url}`}>Seguir leyendo</Link>
        </div>
    </article>
  )
}

export default Post