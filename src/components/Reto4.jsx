import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonValidar from "./BotonValidar";
import Modal from "./Modal";
import Persona from "./Persona";
import "./Reto4.css";

function Reto4() {
  const nombre = localStorage.getItem("nombre") || "";
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(["", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const correctArray = [11, 16, 13, 15, 14];

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
      localStorage.setItem("reto4Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
      console.log("Reto3 completado:", localStorage.getItem("reto4Completed"));
    }      setCompleted(true);
    localStorage.setItem("reto4Completed", JSON.stringify(true));
    navigate("/RetosConseguidos");
  };

  return (
    <div className={`page4 ${completed ? "completed" : ""}`}>
      <h2> El Cuadrado Magico</h2>
      <h4>Recuerda que cada fila y comlumna debe sumar el mismo valor.</h4>
      <div className="cubogame">
        <div className="cubo">18</div>
        <div className="cubo">
          {" "}
          <input
            type="number"
            className="cuadro"
            value={inputValues[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
        </div>
        <div className="cubo">
          <input
            type="number"
            className="cuadro"
            value={inputValues[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
        </div>
        <div className="cubo">
          <input
            type="number"
            className="cuadro"
            value={inputValues[2]}
            onChange={(e) => handleInputChange(2, e.target.value)}
          />
        </div>
        <div className="cubo">
          <input
            type="number"
            className="cuadro"
            value={inputValues[3]}
            onChange={(e) => handleInputChange(3, e.target.value)}
          />
        </div>
        <div className="cubo">17</div>
        <div className="cubo">
          <input
            type="number"
            className="cuadro"
            value={inputValues[4]}
            onChange={(e) => handleInputChange(4, e.target.value)}
          />
        </div>
        <div className="cubo">19</div>
        <div className="cubo">12</div>
      </div>
      <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>

      <Persona
        bubbleText={` ${nombre}, Volvemos al Tablero, a ver como se te da esta vez`}
      />

      {showModal && (
        <Modal>
          <p>Los números ingresados son incorrectos.</p>
        </Modal>
      )}
    </div>
  );
}
export default Reto4;
