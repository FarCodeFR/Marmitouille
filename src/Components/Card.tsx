// interface cardsProps {
//   recipes: recipe[];
// }

import { useState } from "react";
import "../assets/Style/Card.css";

interface recipeProps {
  id: number;
  name: string;
  imgSrc: string;
  alternate: string;
  description: string;
  likes: number;
  favoris: boolean;
  onLike: () => void;
}

function Card({
  name,
  imgSrc,
  alternate,
  description,
  likes,
  favoris,
  onLike,
}: recipeProps) {
  // changement d'état pour l'étoile
  const [isFavoris, setIsFavoris] = useState(favoris);

  const handleClickFavoris = () => {
    setIsFavoris((preve) => !preve);
  };

  return (
    <article>
      <img src={imgSrc} alt={alternate} />
      <figcaption>{name}</figcaption>
      <p>{description}</p>
      <div className="likeSection">
        <span>{likes}</span>
        <button onClick={onLike} className={likes > 0 ? "liked" : "unliked"}>
          ❤️
        </button>
        <button onClick={handleClickFavoris} className="favoris">
          {isFavoris ? "🌟" : "☆"}
        </button>
      </div>
    </article>
  );
}

export default Card;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
