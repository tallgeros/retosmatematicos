import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import RetosConseguidos from "./components/RetosConseguidos";
import Reto1 from "./components/Reto1";
import Reto2 from "./components/Reto2";
import Reto3 from "./components/Reto3";
import Reto4 from "./components/Reto4";
import Reto5 from "./components/Reto5";
import Reto6 from "./components/Reto6";
import Reto7 from "./components/Reto7";
import Reto8 from "./components/Reto8";
import Reto9 from "./components/Reto9";


function App() {
  return (
  
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route
          exact
          path="/RetosConseguidos"
          element={<RetosConseguidos />}
        ></Route>
        <Route exact path="/Reto/1" element={<Reto1 />}></Route>
        <Route exact path="/Reto/2" element={<Reto2 />}></Route>
        <Route exact path="/Reto/3" element={<Reto3 />}></Route>
        <Route exact path="/Reto/4" element={<Reto4 />}></Route>
        <Route exact path="/Reto/5" element={<Reto5 />}></Route>
        <Route exact path="/Reto/6" element={<Reto6 />}></Route>
        <Route exact path="/Reto/7" element={<Reto7 />}></Route>
        <Route exact path="/Reto/8" element={<Reto8 />}></Route>
        <Route exact path="/Reto/9" element={<Reto9 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
