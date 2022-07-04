import { useEffect, useState } from "react"


const Counter = () => {

    const [contador1, setContador1] = useState(1)
    const [contador2, setContador2] = useState(1)

    const Contador1 = () => {

        if(contador === 0) return
        
        setContador1(contador + 1)
        
        }
        const Contador2 = () => {

            if(contador === 7) return
            
            setContador2(contador + 1)
            
            }

        }

   
  

export default Counter