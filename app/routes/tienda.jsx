export async function loader() {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const resultado = await respuesta.json()
  console.log(resultado)
  console.log(process.env.API_URL)

  return {

  }
}

function Tienda() {
  return (
    <div>tienda</div>
  )
}

export default Tienda