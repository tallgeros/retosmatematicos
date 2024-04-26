import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonValidar from "./BotonValidar";
import Modal from "./Modal";
import Peque from "./Peque";
import "./Reto6.css";

function Reto6() {
  const nombre = localStorage.getItem("nombre") || "";
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(["", "", "", "", "", "","",""]);
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const correctArray = [2,3,4,5,6,7,8,9];

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
      localStorage.setItem("reto6Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
      console.log("Reto6 completado:", localStorage.getItem("reto6Completed"));
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputValues(Array(9).fill(""));
      }, 3000);
    }
  };

  return (
    <div className={`page6 ${completed ? "completed" : ""}`}>
      <h2> Tablero de Sumas</h2>
      <h4>Encuentra los valores de este tablero.</h4>
      <div className="gamecubo">
        <div className="cubogame">
          <div className="cuadrado">1</div> 
          <input
            type="number"
            className="cuadrado"
            value={inputValues[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />          
          <input
            type="number"
            className="cuadrado"
            value={inputValues[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
          <input
            type="number"
            className="cuadrado"
            value={inputValues[2]}
            onChange={(e) => handleInputChange(2, e.target.value)}
          />      
          <input
            type="number"
            className="cuadrado"
            value={inputValues[3]}
            onChange={(e) => handleInputChange(3, e.target.value)}
          />        
          <input
            type="number"
            className="cuadrado"
            value={inputValues[4]}
            onChange={(e) => handleInputChange(4, e.target.value)}
          />     
          <input
            type="number"
            className="cuadrado"
            value={inputValues[5]}
            onChange={(e) => handleInputChange(5, e.target.value)}
          />
          <input
            type="number"
            className="cuadrado"
            value={inputValues[6]}
            onChange={(e) => handleInputChange(6, e.target.value)}
          />
          <input
            type="number"
            className="cuadrado"
            value={inputValues[7]}
            onChange={(e) => handleInputChange(7, e.target.value)}
          />          
        </div>
        <div className="line-vertical">
          <div className="vertical">= 6</div>
          <div className="vertical">= 15</div>
          <div className="vertical">=24</div>
        </div>
      </div>
      <div className="line-horizonte">
          <div className="horizontal">=<br/>12</div>
          <div className="horizontal">=<br/>15</div>
          <div className="horizontal">=<br/>18</div>
        </div>
      <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>
      <Peque globoText={` ${nombre}, Volvemos al Tablero con suma , a ver como se te da esta vez`}
/>
      {showModal && (
        <Modal>
          <p>Los números ingresados son incorrectos.</p>
        </Modal>
      )}
    </div>
  );
}
export default Reto6;



