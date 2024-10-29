import { useState } from "react";
import "../assets/Style/Header.css";
import SearchBar from "./HeaderComponents/SearchBar";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  // changement boutton travaux
  const [change, setChange] = useState("");

  const handleClickChange = () => {
    setChange((preve) => !preve);
  };
  return (
    <>
      <section className="Marmitouille">
        <img
          src="src/assets/img/Logo-Marmitouille.png"
          alt="Logo de Marmitouille"
        />
        <h1> Bienvenue sur Marmitouille</h1>
      </section>

      <section className="recherche">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </section>

      <button onClick={handleClickChange} className="mesFavoris">
        {change ? "🚧" : "Mes Favoris"}
      </button>
    </>
  );
}

export default Header;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
