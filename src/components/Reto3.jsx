import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonValidar from "./BotonValidar";
import Modal from "./Modal";
import Peque from "./Peque";
import "./Reto3.css";

function Reto3() {
  const nombre = localStorage.getItem("nombre") || "";
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(["", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const correctArray = [7, 12, 1];

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
      localStorage.setItem("reto3Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
      console.log("Reto3 completado:", localStorage.getItem("reto3Completed"));
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputValues(Array(3).fill(""));
      }, 3000);
    }
  };

  return (
    <div className={`page3 ${completed ? "completed" : ""}`}>
      <h2>La Escalera</h2>
      <h4>Parece que no, pero es correcto</h4>

      <div className="escalera">
        <div className="fila">
          <div className="escalon">2</div>
        </div>
        <div className="fila">
          <div className="escalon">5</div>
          <div className="escalon">3</div>
        </div>
        <div className="fila">
          <div className="escalon">12</div>
          <div className="escalon">
            <input
              type="number"
              className="cuadro"
              value={inputValues[0]}
              onChange={(e) => handleInputChange(0, e.target.value)}
            />
          </div>
          <div className="escalon">4</div>
        </div>
        <div className="fila">
          <div className="escalon">24</div>
          <div className="escalon">
            <input
              type="number"
              className="cuadro"
              value={inputValues[1]}
              onChange={(e) => handleInputChange(1, e.target.value)}
            />
          </div>
          <div className="escalon">5</div>
          <div className="escalon">
            <input
              type="number"
              className="cuadro"
              value={inputValues[2]}
              onChange={(e) => handleInputChange(2, e.target.value)}
            />
          </div>
        </div>
      </div>

      <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>
      <Peque
        globoText={` ${nombre},Espero que se te de bien subir o bajar`}
      />

      {showModal && (
        <Modal>
          <p>Los números ingresados son incorrectos.</p>
        </Modal>
      )}
    </div>
  );
}

export default Reto3;
