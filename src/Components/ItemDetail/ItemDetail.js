import { useNavigate } from "react-router-dom"
import React, {useState} from "react"


const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
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
            <button onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail