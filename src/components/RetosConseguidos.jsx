import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Persona from "./Persona";
import Confetti from 'react-confetti';
import "./RetosConseguidos.css"; 

function RetosConseguidos() {
  const nombre = localStorage.getItem('nombre') || '';

  const [retosCompletados, setRetosCompletados] = useState(Array(9).fill(false));

  useEffect(() => {
    const completados = Array.from({ length: 12 }, (_, index) => {
      const retoCompleted = localStorage.getItem(`reto${index + 1}Completed`);
      return retoCompleted ? JSON.parse(retoCompleted) : false;
    });
    setRetosCompletados(completados);
  }, []);

  const renderRetos = () => {
    const retos = Array.from({ length: 9 }, (_, index) => index + 1);
    return retos.map((reto) => (
      <div key={reto} className={`reto ${retosCompletados[reto - 1] ? 'completado' : ''}`}>
        <Link to={`/reto/${reto}`}>Reto {reto}</Link>
        {retosCompletados[reto - 1] && <span role="img" aria-label="Diana">🎯</span>}
      </div>
    ));
  };

  const bubbleText = () => {
    const todosCompletados = retosCompletados.every(completado => completado);
    const algunoCompletado = retosCompletados.some(completado => completado);

    if (todosCompletados) {
      return `${nombre}, ¡Has completado todos los retos! 🎉, 'próximamente mas!`;
    } else if (algunoCompletado) {
      return `${nombre}, ¡Has completado algunos retos! ¡Sigue así!`;
    } else {
      return `${nombre}, ¡Aún no has completado ningún reto!`;
    }
  };
  return ( 
    <div className="pageConseguido">
      <h1> &#x21dc; {nombre} &#x21dd;</h1>
      <h2>Retos Conseguidos</h2>
      <div className="reto-container"> 
        {renderRetos()}
      </div>
      <Persona bubbleText={bubbleText()} />
      {retosCompletados.every(completado => completado) && <Confetti />}
    </div>
  );
}

export default RetosConseguidos;








