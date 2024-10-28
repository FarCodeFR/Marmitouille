import "../assets/Style/Header.css";

function Header() {
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
        <input type="text" placeholder="  Rechercher une recette" />
        <button>
          <img
            src="src/assets/img/logo_recherche-removebg-preview.png"
            alt=""
          />
        </button>
      </section>

      <button className="Favoris">Mes Favoris</button>
    </>
  );
}

export default Header;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
