
import Navbar from './Components/Navbar/Navbar';
import {Contenido} from "./Components/Contenido/Contenido"
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';


function App() {
  
   const producto = {  
    nombre: "Taza de Stitch",
    precio: "$300"
   }

  return (
    <div className="App">
      
      
    <Navbar/>
    
    <ItemListContainer nombre={producto.nombre} precio={producto.precio}/>
    </div>

   
  );
  }

export default App;
