import { useState } from "react";
import "./assets/Style/App.css";
import Header from "./assets/Components/Header";
import Card from "./assets/Components/Card";
import Footer from "./assets/Components/Footer";

function App() {
  const [] = useState(0);

  return (
    <>
      <Header />
      <h1>Bienvenue sur Marmitouille</h1>
      <Card />
      <Footer />
    </>
  );
}

export default App;
