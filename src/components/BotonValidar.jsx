import React from "react";
import "./BotonValidar.css"
function BotonValidar({ onClick }) {
  return (
    <button id="validar" onClick={onClick}>
      Validar
    </button>
  );
}

export default BotonValidar;
