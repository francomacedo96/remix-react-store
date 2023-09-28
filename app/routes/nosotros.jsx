import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta() {
    return [
        {
            title: "GuitarLA - Sobre nosotros",
            description: "Venta de guitarras, blog de musica"
        }
    ]
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        },
        {
            rel: "preload",
            href: imagen,
            as: "image"
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">

            <h2 className="heading">Nosotros</h2>
            <div className="contenido">

                <img src={imagen} alt="nosotros" />

                <div>

                    <p>

                    Nullam odio nisl, pulvinar eu rhoncus faucibus, porttitor in erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sed magna non turpis tristique ultrices non at lectus. Sed urna mauris, lobortis at sem eget, tempor imperdiet dolor. Fusce hendrerit ex eget molestie luctus. Etiam felis ipsum, maximus at condimentum et, molestie sit amet mauris. In ullamcorper, lacus at ultrices placerat, lacus sem volutpat ex, sit amet molestie nisl eros id eros.

                    </p>

                    <p>

                    Nullam odio nisl, pulvinar eu rhoncus faucibus, porttitor in erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sed magna non turpis tristique ultrices non at lectus. Sed urna mauris, lobortis at sem eget, tempor imperdiet dolor. Fusce hendrerit ex eget molestie luctus. Etiam felis ipsum, maximus at condimentum et, molestie sit amet mauris. In ullamcorper, lacus at ultrices placerat, lacus sem volutpat ex, sit amet molestie nisl eros id eros.

                    </p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros