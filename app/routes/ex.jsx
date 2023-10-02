import { getGuitarras } from "~/models/guitarras.server.js"
import { getPosts } from "~/models/posts.server.js"
import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "../components/listadoGuitarras"
import ListadoPosts from "../components/listadoPosts"
import stylesGuitarras from "../styles/guitarras.css"
import stylesBlog from "../styles/blog.css"

export function meta() {
    return [{
        title: `EX`,
        description: `Guitarras, venta de guitarras, blogs`
    }]

}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarras
        },
        {
            rel: 'stylesheet',
            href: stylesBlog
        }
    ]
}

export async function loader() {

    const [guitarras, posts] = await Promise.all([
        getGuitarras(),
        getPosts()
    ])

    return guitarras.data

}

function Ex() {

    const guitarras = useLoaderData()
    console.log(guitarras)

    return (
        <>

            <main className="contenedor">

                <ListadoGuitarras
                    guitarras={guitarras}

                />

                

            </main>

        </>)
}

export default Ex