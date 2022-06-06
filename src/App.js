import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar} from './Components/Navbar/Navbar'
import Nosotros from './Components/Nosotros/Nosotros'
import Contacto from './Components/Contacto/Contacto'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar2 from './Components/Navbar2/Navbar2';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      
          
          <Navbar2 />

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>  
            <Route path='/categorias/:categoryId' element={ <ItemListContainer/>}/>          
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/nosotros' element={ <Nosotros /> } />
            <Route path='/contacto' element={ <Contacto /> } />
            <Route path='*' element={ <Navigate to={"/"} /> } />
            {/* <Route path='*' element={ <Error404/> } /> */}
          </Routes>
    
          <Footer/>
    </BrowserRouter>
  );
}

export default App;

