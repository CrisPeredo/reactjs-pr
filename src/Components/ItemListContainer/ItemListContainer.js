import "./ItemListContainer.css"

export const ItemListContainer = ({nombre, precio}) =>{

    return(
        <section className="producto">
            <h3 className="title">Productos</h3>
            
            <p className="name__product">Producto: {nombre}</p>
            <p>Precio {precio}</p>
        </section>
    )
}