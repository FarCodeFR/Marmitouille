// interface cardsProps {
//   recipes: recipe[];
// }

import "../assets/Style/Card.css";
import Recette from "./recette";

interface recipeProps {
  id: number;
  name: string;
  imgSrc: string;
  alternate: string;
  description: string;
  likes: number;
  onLike: () => void;
}

function Card({
  name,
  imgSrc,
  alternate,
  description,
  likes,
  onLike,
}: recipeProps) {
  return (
    <>
      <article>
        <img src={imgSrc} alt={alternate} />
        <figcaption>{name}</figcaption>
        <p>{description}</p>
        <div className="likeSection">
          <span>{likes}</span>
          <button onClick={onLike} className={likes > 0 ? "liked" : "unliked"}>
            ❤️
          </button>
        </div>
      </article>
      
    </>
  );
}

export default Card;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
