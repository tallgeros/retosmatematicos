import React, { useState } from 'react';
import { useNavigate} from "react-router-dom"
import Persona from './Persona';
import './Homepage.css';

function Homepage() {
  const [nombre, setNombre] = useState(localStorage.getItem('nombre') || '');
const navigate = useNavigate()

    const handleEmpezarJuego = () => {
      localStorage.setItem('nombre', nombre);
      if(nombre.trim() !== "") {
        
        navigate('/RetosConseguidos');
      }else {
        alert("Por favor, introduce tu nombre antes de empezar el juego")
      }
    }
    const handleChangeNombre = (e) => {
      const nombreValue = e.target.value;
      setNombre(nombreValue);
      localStorage.setItem('nombre', nombreValue);
    }

  return (
    <div className="header">
      
      <h1>BIENVENIDO</h1>
      <legend>Introduce: Nombre o alias</legend>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleEmpezarJuego();
      }}>
        <label>
          <input
           type="text" 
          placeholder='Nombre'
          size="18"
          name='nombre'
          value={nombre}
          onChange={handleChangeNombre} />
        </label>
        <button type="submit" className='inicio'>
          <span>Empecemos</span>
        </button>
      </form>
      
      <div className="medio">
        <p>
          He creado unos cuantos retos matemáticos y de lógica para estrujarte
          la mente, intenta acertarlos y acabar el recorrido.
        </p>
      </div>
      <Persona bubbleText={`Te desafío a que los resuelvas todos.`} />
      <footer> ---- programadorgba © 2024 -------</footer>
    </div>
  )
}

export default Homepage;





