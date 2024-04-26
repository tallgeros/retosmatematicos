import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import BotonValidar from "./BotonValidar";
import Peque from "./Peque";
import "./Reto9.css";

function Reto9() {
  const nombre = localStorage.getItem("nombre") || "";
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [board, setBoard] = useState([
    ["", "", "1", "2", "8", "", "", "", ""],
    ["", "", "", "", "6", "", "4", "", "3"],
    ["6", "", "", "7", "", "", "2", "", ""],
    ["", "3", "", "", "", "1", "", "9", "5"],
    ["", "", "", "5", "", "7", "", "", ""],
    ["1", "2", "", "8", "", "", "", "4", ""],
    ["", "", "9", "", "", "8", "", "", "2"],
    ["5", "", "7", "", "4", "", "", "", ""],
    ["", "", "", "", "1", "5", "8", "", ""],
  ]);
  

  const handleChange = (rowIndex, colIndex, event) => {
    const newValue = event.target.value;
    setBoard(prevBoard => {
      const newBoard = prevBoard.map((row, rIndex) => {
        if (rIndex === rowIndex) {
          return row.map((cell, cIndex) => {
            if (cIndex === colIndex) {
              return newValue;
            } else {
              return cell;
            }
          });
        } else {
          return row;
        }
      });
      return newBoard;
    });
  };
  

  const validateSudoku = () => {
    for (let col = 0; col < 9; col++) {
      const numbersInColumn = new Set();
      for (let row = 0; row < 9; row++) {
        const number = board[row][col];
        if (number !== "" && numbersInColumn.has(number)) {
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 3000);
          return;
        }
        numbersInColumn.add(number);
      }
    }

    setCompleted(true);
    localStorage.setItem("reto9Completed", JSON.stringify(true));
    navigate("/RetosConseguidos");
  };

  return (
    <div className={`page9 ${completed ? "completed" : ""}`}>
      <h2>Crucigrama de números</h2>
      <h4 className="soku">
        Hay más de una opción correcta, pero tiene que cumplirse.
      </h4>
      <div className="sudoku-grid">
  <table>
    <tbody>
      {board.map((row, rowIndex) => (
        <tr key={rowIndex} className="sudoku-row">
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="sudoku-cell">
              {cell === "" ? (
                <input className="sudoku-input" 
                type="text"
                onChange={(event) => handleChange(rowIndex, cellIndex, event)} />
              ) : (
                <div className="sudoku-filled">{cell}</div>
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
      <BotonValidar onClick={validateSudoku}>Validar Sudoku</BotonValidar>
      <Peque
        globoText={`${nombre}, Tenemos unos cuantos numeros por poner`}
      />
      {showModal && (
        <Modal>
          <p>El Sudoku ingresado no es válido.</p>
        </Modal>
      )}
    </div>
  );
}

export default Reto9;
