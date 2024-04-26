import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotonValidar from "./BotonValidar";
import Modal from "./Modal";
import Peque from "./Peque"
import "./Reto5.css";

function Reto5() {
  const nombre = localStorage.getItem('nombre') || '';
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(["", "", "", "","", "", "", "","", "", "", "","",""]);
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const correctArray = [127,42,43,42,20,23,22,8,12,9,13,5,9,7];

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
      localStorage.setItem("reto5Completed", JSON.stringify(true));
      navigate("/RetosConseguidos");
      console.log("Reto5 completado:", localStorage.getItem("reto5Completed"));
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setInputValues(Array(12).fill(""));
      }, 3000);
    }
  };

  return (
    <div className={`page5 ${completed ? "completed" : ""}`}>
      <h2>La Pirámide Misteriosa</h2>
      <h4>Trata de completarla de manera lógica.</h4>

      <div className="piramide">
        <div className="fila">
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
          </div>
        </div>
        <div className="fila">
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
          </div>
          <div className="piedra">85</div>
        </div>
        <div className="fila">
          <div className="piedra">43</div>
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[2]}
            onChange={(e) => handleInputChange(2, e.target.value)}
          />
          </div>
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[3]}
            onChange={(e) => handleInputChange(3, e.target.value)}
          />
          </div>
        </div>
        <div className="fila">
          <div className="piedra">          
          <input
            type="number"
            className="piedra"
            value={inputValues[4]}
            onChange={(e) => handleInputChange(4, e.target.value)}
          /></div>
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[5]}
            onChange={(e) => handleInputChange(5, e.target.value)}
          />
          </div>
          <div className="piedra">20</div>
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[6]}
            onChange={(e) => handleInputChange(6, e.target.value)}
          />
          </div>
        </div>
        <div className="fila">
          <input
            type="number"
            className="piedra"
            value={inputValues[7]}
            onChange={(e) => handleInputChange(7, e.target.value)}
          />
          <input
            type="number"
            className="piedra"
            value={inputValues[8]}
            onChange={(e) => handleInputChange(8, e.target.value)}
          />
          <div className="piedra">11</div>       
          <input
            type="number"
            className="piedra"
            value={inputValues[9]}
            onChange={(e) => handleInputChange(9, e.target.value)}
          />
          <input
            type="number"
            className="piedra"
            value={inputValues[10]}
            onChange={(e) => handleInputChange(10, e.target.value)}
          />
        </div>
        <div className="fila">
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[11]}
            onChange={(e) => handleInputChange(11, e.target.value)}
          />
          </div>
          <div className="piedra">3</div>
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[12]}
            onChange={(e) => handleInputChange(12, e.target.value)}
          />
          </div>
          <div className="piedra">2</div>
          <div className="piedra">
          <input
            type="number"
            className="piedra"
            value={inputValues[13]}
            onChange={(e) => handleInputChange(13, e.target.value)}
          />
          </div>
          <div className="piedra">6</div>
        </div>
      </div>

      <BotonValidar onClick={validateNumbers}>Validar</BotonValidar>
      <Peque globoText={` ${nombre},Esto ya impone, parece mas difícil`} />

      {showModal && (
        <Modal>
          <p>Los números ingresados son incorrectos.</p>
        </Modal>
      )}
    </div>
  );
}

export default Reto5;