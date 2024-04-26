import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonValidar from "./BotonValidar";
import Peque from "./Peque";

import "./Reto2.css";

function Reto2({globoText}) {
  const nombre = localStorage.getItem("nombre") || "";
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(Array(7).fill(""));
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const correctArray = [7, 1, 5, 3, 6, 4, 2];

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const validateNumbers = () => {
    if (
      JSON.stringify(inputValues.map(Number)) === JSON.stringify(correctArray)
    ) {
      setCompleted(true);
      localStorage.setItem("reto2Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
      console.log("Reto2 completado:", localStorage.getItem("reto2Completed"));
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputValues(Array(9).fill(""));
      }, 3000);
    }
  };
  return (
    <div className={`page2 ${completed ? "completed" : ""}`}>
      <h2>La Serpiente</h2>
      <h4>
        Coloca los números del 1 al 7 de forma que dos números consecutivos no
        estén en las casillas adyacentes
      </h4>
      <div className="game2">
        <div className="fila">
          <input
            type="number"
            className="cuadro"
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
        </div>
        <div className="fila">
          <input
            type="number"
            className="cuadro"
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
          <div className="cuadro cuadro-negro" />
          <input
            type="number"
            className="cuadro"
            onChange={(e) => handleInputChange(2, e.target.value)}
          />
        </div>
        <div className="fila">
          <input
            type="number"
            className="cuadro"
            onChange={(e) => handleInputChange(3, e.target.value)}
          />
        </div>
        <div className="fila">
          <input
            type="number"
            className="cuadro"
            onChange={(e) => handleInputChange(4, e.target.value)}
          />
        </div>
        <div className="fila">
          <input
            type="number"
            className="cuadro"
            onChange={(e) => handleInputChange(5, e.target.value)}
          />
          <div className="blanco" />
          <input
            type="number"
            className="cuadro"
            onChange={(e) => handleInputChange(6, e.target.value)}
          />
        </div>
      </div>
      <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>
      
        <Peque globoText={`${nombre}, Esto parece que se complica. ¡ánimo!`} />
      
    </div>
  );
}
export default Reto2;
