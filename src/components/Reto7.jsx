import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonValidar from "./BotonValidar";
import Modal from "./Modal";
import Peque from "./Peque"
import "./Reto7.css";

function Reto7() {
  const nombre = localStorage.getItem('nombre') || '';
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(["", "", "", "","", "", "", "","", ""]);
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const correctArray = [17,53,50,11,47,23,19,37,34,10];

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
      localStorage.setItem("reto7Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
      console.log("Reto7 completado:", localStorage.getItem("reto7Completed"));
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputValues(Array(12).fill(""));
      }, 3000);
    }
  };


  return (
    <div className={`page7 ${completed ? "completed" : ""}`}>
      <h2>El Triángulo Mágico</h2>
      <h4 className="des">Recuerda que cada fila de cada lado debe sumar el mismo valor -100-.
        los Numeros a utilizar son (10,11,17,19,23,34,37,47,50,53)</h4>
      <div className="cuadro-triangulo">
        <div className="filauno">
        <input
            type="number"
            className="circulo"
            value={inputValues[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
        </div>
        <div className="filados">
        <input
            type="number"
            className="circulo"
            value={inputValues[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
                  <input
            type="number"
            className="circulo"
            value={inputValues[2]}
            onChange={(e) => handleInputChange(2, e.target.value)}
          />

        </div>
        <div className="filatres">
        <input
            type="number"
            className="circulo"
            value={inputValues[3]}
            onChange={(e) => handleInputChange(3, e.target.value)}
          />
                  <input
            type="number"
            className="circulo"
            value={inputValues[4]}
            onChange={(e) => handleInputChange(4, e.target.value)}
          />
                  <input
            type="number"
            className="circulo"
            value={inputValues[5]}
            onChange={(e) => handleInputChange(5, e.target.value)}
          />

        </div>
        <div className="filacuatro">
        <input
            type="number"
            className="circulo"
            value={inputValues[6]}
            onChange={(e) => handleInputChange(6, e.target.value)}
          />
                  <input
            type="number"
            className="circulo"
            value={inputValues[7]}
            onChange={(e) => handleInputChange(7, e.target.value)}
          />
                  <input
            type="number"
            className="circulo"
            value={inputValues[8]}
            onChange={(e) => handleInputChange(8, e.target.value)}
          />
                  <input
            type="number"
            className="circulo"
            value={inputValues[9]}
            onChange={(e) => handleInputChange(9, e.target.value)}
          />

        </div>
      </div>
      <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>
      <Peque globoText= {` ${nombre},Veo que los cuadrados lo dominas vamos a por los triángulos`} />
      {showModal && (
        <Modal>
          <p>Los números ingresados son incorrectos.</p>
        </Modal>
      )}



    </div>
  )
}

export default Reto7