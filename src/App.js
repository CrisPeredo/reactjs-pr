import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar} from './Components/Navbar/Navbar'
import Nosotros from './Components/Nosotros/Nosotros'
import Contacto from './Components/Contacto/Contacto'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar2 from './Components/Navbar2/Navbar2';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './Context/Context';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {


  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (item) =>{
    setCart( [...cart, item] )
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

    const totalPrecio = () =>{
      return cart.reduce( (acc, prod) => acc += (prod.precio * prod.cantidad), 0 )
    }

    const totalCantidad = () =>{
      return cart.reduce ( (acc, prod) => acc += prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
      setCart ([])
    }

    const removerItem = (id) => {
      setCart( cart.filter((prod) => prod.id !== id ) )
    }


  return (

    <CartContext.Provider value={{cart, addItem, isInCart, totalPrecio, totalCantidad, vaciarCarrito, removerItem}}>




      <BrowserRouter>
        
            
            <Navbar2 />

            <Routes>
              <Route path='/' element={ <ItemListContainer/> }/>  
              <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>          
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/nosotros' element={ <Nosotros /> } />
              <Route path='/contacto' element={ <Contacto /> } />
              <Route path='*' element={ <Navigate to={"/"} /> } />
              {/* <Route path='*' element={ <Error404/> } /> */}
            </Routes>
      
            <Footer/>

      </BrowserRouter>

    </CartContext.Provider>

  );
}

export default App;

