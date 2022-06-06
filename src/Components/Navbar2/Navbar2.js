import './Navbar2.scss'
import { Link } from 'react-router-dom'

export const Navbar2 = () => {

    return (
        <header className="header2">
            <div className="header__container">

                <Link to={"/"}><h1 className="header__logo">SJ INDUMENTARIA</h1></Link>
                

                <nav className="header__navbar">
                    <Link to={"/categorias/pantalones"} className="header__navlink">pantalones</Link>
                    <Link to={"/categorias/buzos"} className="header__navlink">Buzos</Link>
                    <Link to={"/categorias/zapatillas"} className="header__navlink">Zapatillas</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar2
