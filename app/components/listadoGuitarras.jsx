import Guitarra from "../routes/guitarra.$guitarraUrl"

export default function ListadoGuitarras({guitarras}) {
/*
    const [t] = guitarras.data;
    console.log(t)

    return (
        <>
        <h2 className="heading">Nuestra colección</h2>

            {t?.length && (
                <div className="guitarras-grid">
                    {t?.map(guitarra => (
                        
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}

                        />
                    ))}
                </div>
            )}
        </>
    )*/

    console.log(guitarras)

    return (
        <>
        <h2 className="heading">Nuestra colección</h2>

            {guitarras?.length && (
                <div className="guitarras-grid">
                    {guitarras?.map(guitarra => (
                        
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}

                        />
                    ))}
                </div>
            )}
        </>
    )
}
