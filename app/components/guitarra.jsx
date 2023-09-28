import React from 'react'

function Guitarra({ guitarra }) {

    const { nombre, descripcion, precio, url, imagen } = guitarra



    return (
        <div className='guitarra'>

            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />

            <div className='contenido'>
                <h3> {nombre} </h3>
                <p className='descripcion'> {descripcion} </p>
                <p className='precio'> ${precio} </p>

            </div>

        </div>
    )
}

export default Guitarra