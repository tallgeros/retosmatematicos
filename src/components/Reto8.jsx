import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Peque from "./Peque"
import BotonValidar from "./BotonValidar";
import "./Reto8.css";

function Reto8() {
  const nombre = localStorage.getItem("nombre") || "";
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(Array(81).fill(""));
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const correctArray = [17, 6, 69, 25, 94, 2, 85, 47, 75, 3, 60, 50, 50, 50];

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
      localStorage.setItem("reto8Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputValues(Array(14).fill(""));
      }, 3000);
    }
  };

  return (
    <div className={`page8 ${completed ? "completed" : ""}`}>
      <h2>Crucigrama de números</h2>
      <h4 className="ku">
        {" "}
        Hay más de una opción correcta, pero tiene que cumplirse.
      </h4>
      <br />
      <br />
      <div className="crucigrama">
        <div className="sudo total">84</div>
        <div className="sudo">+</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
        />
        <div className="sudo">=</div>
        <div className="sudo total">101</div>
        <div className="sudo blanco"></div>
        <input
          type="number"
          className="sudo"
          value={inputValues[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
        />
        <div className="sudo blanco"></div>
        <div className="sudo">16</div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo">X</div>
        <div className="sudo blanco"></div>
        <div className="sudo">+</div>
        <div className="sudo blanco"></div>
        <div className="sudo">X</div>
        <div className="sudo blanco"></div>
        <div className="sudo">+</div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo">5</div>
        <div className="sudo blanco"></div>

        <input
          type="number"
          className="sudo"
          value={inputValues[2]}
          onChange={(e) => handleInputChange(2, e.target.value)}
        />
        <div className="sudo">+</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[3]}
          onChange={(e) => handleInputChange(3, e.target.value)}
        />
        <div className="sudo">=</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[4]}
          onChange={(e) => handleInputChange(4, e.target.value)}
        />
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo">=</div>
        <div className="sudo blanco"></div>
        <div className="sudo">=</div>
        <div className="sudo blanco"></div>
        <div className="sudo">=</div>
        <div className="sudo blanco"></div>
        <div className="sudo">=</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[5]}
          onChange={(e) => handleInputChange(5, e.target.value)}
        />
        <div className="sudo">X</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[6]}
          onChange={(e) => handleInputChange(6, e.target.value)}
        />
        <div className="sudo">=</div>
        <div className="sudo total">170</div>
        <div className="sudo blanco"></div>
        <div className="sudo">150</div>
        <div className="sudo blanco"></div>
        <div className="sudo">110</div>
        <div className="sudo">X</div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo">=</div>
        <div className="sudo blanco"></div>
        <div className="sudo">=</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[7]}
          onChange={(e) => handleInputChange(7, e.target.value)}
        />
        <div className="sudo">+</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[8]}
          onChange={(e) => handleInputChange(8, e.target.value)}
        />
        <div className="sudo">=</div>
        <div className="sudo">122</div>
        <div className="sudo blanco"></div>
        <input
          type="number"
          className="sudo"
          value={inputValues[9]}
          onChange={(e) => handleInputChange(9, e.target.value)}
        />
        <div className="sudo blanco"></div>
        <input
          type="number"
          className="sudo"
          value={inputValues[10]}
          onChange={(e) => handleInputChange(10, e.target.value)}
        />
        <div className="sudo">=</div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo blanco"></div>
        <div className="sudo ">X</div>
        <div className="sudo blanco"></div>
        <div className="sudo">+</div>
        <div className="sudo ">94</div>
        <div className="sudo">-</div>
        <div className="sudo">44</div>
        <div className="sudo">=</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[11]}
          onChange={(e) => handleInputChange(11, e.target.value)}
        />
        <div className="sudo">=</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[12]}
          onChange={(e) => handleInputChange(12, e.target.value)}
        />
        <div className="sudo">=</div>
        <input
          type="number"
          className="sudo"
          value={inputValues[13]}
          onChange={(e) => handleInputChange(13, e.target.value)}
        />
      </div>

      <br />

      <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>
      <Peque globoText={`${nombre}, Este parece fácil intenta terminarlo en poco tiempo`} />
      {showModal && (
        <Modal>
          <p>Los números ingresados son incorrectos.</p>
        </Modal>
      )}
    </div>
  );
}
export default Reto8;
