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
      <section>
        <div className="animation-container">
          <div className="lightning-container">
            <div className="lightning white"></div>
            <div className="lightning red"></div>
          </div>
          <div className="boom-container">
            <div className="shape circle big white"></div>
            <div className="shape circle white"></div>
            <div className="shape triangle big yellow"></div>
            <div className="shape disc white"></div>
            <div className="shape triangle blue"></div>
          </div>
          <div className="boom-container second">
            <div className="shape circle big white"></div>
            <div className="shape circle white"></div>
            <div className="shape disc white"></div>
            <div className="shape triangle blue"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
