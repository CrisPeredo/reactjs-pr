import { useNavigate } from "react-router-dom"
import React, {useState} from "react"
import ItemCounter from "../ItemCounter/ItemCounter"


const ItemDetail = ({item}) => {
    
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

        console.log(itemToCart)
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
                <ItemCounter
                
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                onAdd={agregar}
                />
            
            <button onClick={handleVolver}>VOLVER</button>
        </div>
    ) 
}

    export default ItemDetail







