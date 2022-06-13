import { useContext } from "react"
import {BsCart3} from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/Context"

const CartWidget = () =>{

    const {totalCantidad} = useContext(CartContext)

    return(
        <Link to="/cart" className="widget">
            <BsCart3/>
            <span className="">{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget