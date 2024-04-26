import "./Persona.css"
function Persona({bubbleText}) {
  return (
    <div className="abajo">
      <img className="fondo" src="/images/pared.jpg" alt="fondo Pared" />
      <div className="bubble">{bubbleText}</div>
      <img className="persona" src="
       /images/doc.png" alt="Doc" />
    </div>
  );
}
export default Persona