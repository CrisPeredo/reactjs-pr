import { Link, useNavigate } from "react-router-dom"
import React, {useContext, useState} from "react"
import ItemCounter from "../ItemCounter/ItemCounter"
import { CartContext } from "../../Context/Context"


const ItemDetail = ({item}) => {
    
    const {addItem, isInCart} = useContext(CartContext)

  

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    const agregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }

       addItem(itemToCart)

    }

    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <h4>Precio: ${item.precio}</h4>
            <p><strong>Género:</strong> {item.genero}</p>
            <p><strong>Proveedor:</strong> {item.proveedor}</p>
            <p><strong>Color:</strong> {item.color}</p>
            <p><strong>Disciplina:</strong> {item.disciplina}</p>
            <hr/>

            {
                isInCart(item.id)
                ?
                <Link to="/cart" className="btn btn-danger my-3">¡Listo!</Link>
                :
                <ItemCounter
                
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                onAdd={agregar}
                />
            

            }
            

            

            <br/>

            <button onClick={handleVolver}>VOLVER</button>
        </div>
    ) 
}

    export default ItemDetail







