import { getGuitarras } from "../models/guitarras.server"
import { useLoaderData } from "@remix-run/react"
import Guitarra from "../components/guitarra"

export async function loader() {
  const guitarras = await getGuitarras()
  console.log(guitarras)

  return guitarras.data
}



function Tienda() {

  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      
      <h2 className="heading">Nuestra colección</h2>

      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra?.id}
                guitarra={guitarra.attributes}

              />
          ))}
        </div>
      )}

    </main>
  )
}

export default Tienda