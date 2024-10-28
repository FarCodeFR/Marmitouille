// interface cardsProps {
//   recipes: recipe[];
// }

interface recipeProps {
  name: string;
  imgSrc: string;
  alternate: string;
}

function Card({ name, imgSrc, alternate }: recipeProps) {
  return (
    <article>
      <figure>
        <img src={imgSrc} alt={alternate} />
        <figcaption>{name}</figcaption>
      </figure>
    </article>
  );
}

export default Card;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
