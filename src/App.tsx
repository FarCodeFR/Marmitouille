import { useState } from "react";
import "./assets/Style/App.css";
import "./Components/Card";
import "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [] = useState(0);

  return (
    <>
      <nav className="maNavBar">
        <Header />
      </nav>

      <h1>Bienvenue sur Marmitouille</h1>
    </>
  );
}

export default App;
