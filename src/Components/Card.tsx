const recipes = [
  {
    id: 1,
    name: "Bacalhau à bras",
    imgSrc: "src/assets/img/bacalhau_a_bras-min.jpg",
    alternate: "Picture of bacalhau à bras",
  },
  {
    id: 2,
    name: "Blanquette de veau",
    imgSrc: "src/assets/img/Blanquette_veau-min.jpg",
    alternate: "Picture of blanquette de veau",
  },
  {
    id: 3,
    name: "Boeuf bourguignon",
    imgSrc: "src/assets/img/boeuf_bourguignon-min.jpg",
    alternate: "Picture of boeuf bourguignon",
  },
  {
    id: 4,
    name: "Coquillettes au jambon",
    imgSrc: "src/assets/img/coquillettes_jambon-min.jpg",
    alternate: "Picture of coquillettes au jambon",
  },
  {
    id: 5,
    name: "Lasagnes",
    imgSrc: "src/assets/img/lasagnes-min.jpg",
    alternate: "Picture of lasagnes",
  },
  {
    id: 6,
    name: "Omelettes aux oignons",
    imgSrc: "src/assets/img/Omelette_oignons-min.jpg",
    alternate: "Picture of omelette aux oignons",
  },
  {
    id: 7,
    name: "Potées au chou vert",
    imgSrc: "src/assets/img/Potee_chou vert-min.jpg",
    alternate: "Picture of potée au chou vert",
  },
  {
    id: 8,
    name: "Choucroute",
    imgSrc: "src/assets/img/choucroute-min.jpg",
    alternate: "Picture of choucroute",
  },
  {
    id: 9,
    name: "Ramen",
    imgSrc: "src/assets/img/ramen-min.jpg",
    alternate: "Picture of ramen",
  },
];

function Card() {
  <>
    <article>
      <figure>
        <img src={recipes[0].imgSrc} alt={recipes[0].alternate} />
        <figcaption>{recipes[0].name}</figcaption>
      </figure>
    </article>
  </>;
}

export default Card;

// https://excalidraw.com/#room=0b4fd9b676510ae6df27,i-wmsGnZye5uxAxR_wWWNw
