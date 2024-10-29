import { useState } from "react";

function MyButton() {
  const [favoris, setFavoris] = useState(false);
  function show() {
    setFavoris(true);
  }
  function close() {
    setFavoris(false);
  }

  return (
    <section>
      <button className="Favoris">Mes Favoris</button>
    </section>
  );
}

export default MyButton;
