import React from "react";
import "./Modal.css"; // Estilos del modal

function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

export default Modal;
