import './Nosotros.css'


export const Nosotros = ( {titulo = 'Titulo por defecto', content = 'String por defecto'} ) => {

    
    console.log(titulo, content)

    return (
        <section id="nosotros" className="nosotros">

            <h2 className="nosotros__title">{titulo}</h2>
            <hr/>

            <p>{content}</p>

        </section>
    )
    
}