import { useState } from "react";
import "./assets/Style/App.css";
import "./Components/Header";
import "./Components/Card";
import "./Components/Footer";

const recipes = [
  {
    id: 1,
    name: "Bacalhau à bras",
    imgSrc: "src/assets/img/bacalhau_a_bras-min.jpg"
  },
  {
    id: 2,
    name: "Blanquette de veau",
    imgSrc: "src/assets/img/Blanquette_veau-min.jpg"
  },
  {
    id: 3,
    name: "Boeuf bourguignon",
    imgSrc: "src/assets/img/boeuf_bourguignon-min.jpg"
  },
  {
    id: 4,
    name: "Coquillettes au jambon",
    imgSrc: "src/assets/img/coquillettes_jambon-min.jpg"
  },
  {
    id: 5,
    name: "Lasagnes",
    imgSrc: "src/assets/img/lasagnes-min.jpg"
  },
  {
    id: 6,
    name: "Omelettes aux oignons",
    imgSrc: "src/assets/img/Omelette_oignons-min.jpg"
  },
  {
    id: 7,
    name: "Potées au chou vert",
    imgSrc: "src/assets/img/Potee_chou vert-min.jpg"
  },
  {
    id: 8,
    name: "Choucroute",
    imgSrc: "src/assets/img/choucroute-min.jpg"
  },
  {
    id: 9,
    name: "Ramen",
    imgSrc: "src/assets/img/ramen-min.jpg"
  },
]

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
