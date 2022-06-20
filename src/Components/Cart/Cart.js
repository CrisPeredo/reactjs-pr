import { useContext } from "react"
import { CartContext } from "../../Context/Context"
import {BiTrash} from "react-icons/bi"
import EmptyCart from "./EmptyCart"


const  Cart = () => {

    const {cart, totalPrecio, vaciarCarrito, removerItem} = useContext(CartContext)

    if (cart.length === 0) return <EmptyCart/>

    return(
        <div className="container my-3">
            <h2>Tu carrito</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id} className="my-2">
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <h6>Precio: ${item.precio * item.cantidad}</h6>
                        <button onClick={() => removerItem(item.id)} className="btn btn-danger"><BiTrash/></button>
                        <hr/>
                    </div>

                ))
            }
            <h4>Total: $ {totalPrecio()}</h4>

            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito de compras</button>
        </div>
    )
}

export default Cart