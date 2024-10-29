// interface cardsProps {
//   recipes: recipe[];
// }

import React, { useState } from "react";

import "../assets/Style/Card.css";
import ImageModal from "./HeaderComponents/ImageModal";

interface recipeProps {
  name: string;
  imgSrc: string;
  alternate: string;
  description: string;
  likes: number;
  favoris: boolean;
  onLike: () => void;
  recettedDescription: string;
}

function Card({
  name,
  imgSrc,
  alternate,
  description,
  likes,
  favoris,
  onLike,
  recettedDescription,
}: recipeProps) {
  // changement d'état pour l'étoile
  const [isFavoris, setIsFavoris] = useState(favoris);

  const handleClickFavoris = () => {
    setIsFavoris((preve) => !preve);
  };

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMouseX(x);
    setMouseY(y);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  const rotationX = (mouseY / 7).toFixed(2);
  const rotationY = (-mouseX / 7).toFixed(2);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {" "}
        <img onClick={openModal} src={imgSrc} alt={alternate} />
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
      {isModalOpen && (
        <ImageModal
          imgSrc={imgSrc}
          altText={alternate}
          onClose={closeModal}
          name={name}
          recettedDescription={recettedDescription}
        />
      )}
    </>
  );
}

export default Card;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
