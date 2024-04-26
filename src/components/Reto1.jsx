import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Persona from "./Persona";

import BotonValidar from "./BotonValidar";
import "./Reto1.css";

function Reto1() {
  const nombre = localStorage.getItem('nombre') || '';
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(Array(9).fill(""));
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  const correctArray = [1, 3, 2, 3, 2, 1, 2, 1, 3];

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
      localStorage.setItem("reto1Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputValues(Array(9).fill(""));
      }, 3000);
    }
  };

  return (
    <div className={`page1 ${completed ? "completed" : ""}`}>
      <h2> El Cuadrado Misterioso</h2>
      <p className="text1">
        Completa la tabla con los números del 1 al 3. Cada columna y diagonal
        deben sumar 6.
      </p>
      <div className="cubogame">
        {inputValues.map((value, index) => (
          <input
            key={index}
            className={`cubo ${index + 1}`}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            disabled={completed}
          />
        ))}
      </div>
      {!completed && <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>}

      <Persona
        bubbleText={`Hola ${nombre}, este es el primer reto. ¡Te lo pongo facilito para calentar!`}
      />

      {showModal && (
        <Modal>
          <p>Los números ingresados son incorrectos.</p>
        </Modal>
      )}
    </div>
  );
}

export default Reto1;


