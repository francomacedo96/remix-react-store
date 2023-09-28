import { Link } from "@remix-run/react"


function Post({posts}) {


    const { contenido, imagen, titulo, url, publishedAt } = posts
    console.log(posts)

  return (
    <article className="post">
        
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt="" />

        <div className="contenido">

            <h3> {titulo} </h3>
          <p className="fecha"> {publishedAt} </p>

            <p className="resumen"> {contenido} </p>
            <Link className="enlace" to={`posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

export default Post