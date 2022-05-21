import "./styles.css"
import Navbar from './Components/Navbar';


function App() {

  const MiContenido = "Ingresar contenido"



  return (
    <div className="App">
      

        <Navbar/>

      <p className="contenido">{MiContenido}</p>
    </div>
  );
}

export default App;
