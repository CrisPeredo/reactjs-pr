import { useState } from "react"


const ItemCounter = ( { max, setCounter, counter, onAdd } ) => {

    


    const sumar = () =>{
       counter < max && setCounter(counter + 1)
    }

    const restar = () =>{
       counter > 1 && setCounter(counter - 1)
    }


    


    return(
        <div className="my-3">
            <button onClick={restar} className="btn btn-outline-danger">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={sumar} className="btn btn-outline-primary">+</button>
            <hr/>

            <button onClick={onAdd} className="btn btn-outline-info">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter