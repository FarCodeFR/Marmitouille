import { useState } from "react";
import "./assets/Style/App.css";
import "./Components/Header";
import "./Components/Card";
import "./Components/Footer";

function App() {
  const [] = useState(0);

  return (
    <>
      <img src="src/assets/img/logo.png"></img>

      <h1>Bienvenue sur Marmitouille</h1>
    </>
  );
}

export default App;
