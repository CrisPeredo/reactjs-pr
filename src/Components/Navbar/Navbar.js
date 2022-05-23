import "./Navbar.css"
import { MdAddShoppingCart } from "react-icons/md"
 

const Navbar = () =>{
    return <header>
        <nav>
            <div className="nav">
                <h1>MI PROYECTO</h1>

                <ul>
                    <li>Menu</li>
                    <li>Productos</li>
                    <li>Ayuda</li>
                    <li className="cart"><MdAddShoppingCart/></li>
                </ul>        
            </div>
        </nav>
    </header>
}
export default Navbar 