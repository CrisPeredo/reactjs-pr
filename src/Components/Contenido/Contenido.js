import "./Contenido.css"

export const Contenido = (props) =>{
    return(
        <div className="contenido__container">
            <section className="contenido">
                <h2 className="producto__title">{props.titulo}</h2>
                <p className="product">Informacion del producto</p>
            </section>
        </div>
    )
}