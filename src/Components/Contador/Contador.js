import "./Contador.css"
import React, {useState} from "react";


 const Contador = () => {

    const [contador, setContador] = useState (1);

    return (
    <div>
        <p>Cantidad de productos : {contador}</p>
        <button onClick={() => {setContador (contador + 1)}}>
            +
        </button>
        <button onClick={() => {setContador (contador - 1)}}>
            -
        </button>
        <button onClick={() => {setContador ( 0 )}}>
            Restablecer
        </button>
    </div>
    )
}
export default Contador