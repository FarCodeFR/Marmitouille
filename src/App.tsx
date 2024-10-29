import { useState } from "react";
import "./assets/Style/App.css";
import "./Components/Card";
import "./Components/Footer";
import Header from "./Components/Header";
import Card from "./Components/Card";

const recipes = [
  {
    id: 1,
    name: "Bacalhau à bras",
    imgSrc: "src/assets/img/bacalhau_a_bras-min.jpg",
    alternate: "Picture of bacalhau à bras",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    isFavoris: false,
  },
  {
    id: 2,
    name: "Blanquette de veau",
    imgSrc: "src/assets/img/Blanquette_veau-min.jpg",
    alternate: "Picture of blanquette de veau",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    isFavoris: false,
  },
  {
    id: 3,
    name: "Boeuf bourguignon",
    imgSrc: "src/assets/img/boeuf_bourguignon-min.jpg",
    alternate: "Picture of boeuf bourguignon",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    isFavoris: false,
  },
  {
    id: 4,
    name: "Coquillettes au jambon",
    imgSrc: "src/assets/img/coquillettes_jambon-min.jpg",
    alternate: "Picture of coquillettes au jambon",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    isFavoris: false,
  },
  {
    id: 5,
    name: "Lasagnes",
    imgSrc: "src/assets/img/lasagnes-min.jpg",
    alternate: "Picture of lasagnes",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    isFavoris: false,
  },
  {
    id: 6,
    name: "Omelettes aux oignons",
    imgSrc: "src/assets/img/Omelette_oignons-min.jpg",
    alternate: "Picture of omelette aux oignons",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    isFavoris: false,
  },
  {
    id: 7,
    name: "Potée au chou vert",
    imgSrc: "src/assets/img/Potee_chou vert-min.jpg",
    alternate: "Picture of potée au chou vert",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    favoris: false,
  },
  {
    id: 8,
    name: "Choucroute",
    imgSrc: "src/assets/img/choucroute-min.jpg",
    alternate: "Picture of choucroute",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    favoris: false,
  },
  {
    id: 9,
    name: "Ramen",
    imgSrc: "src/assets/img/ramen-min.jpg",
    alternate: "Picture of ramen",
    description:
      "Je suis la description actuelle donc changer moi merde je connais pas cette recette",
    likes: 0,
    favoris: false,
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipess, setRecipes] = useState(recipes);

  // const filteredRecipes = recipes.filter((recipe) =>
  //   recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredRecipes = recipess
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.likes - a.likes);

  const toggleLike = (id: number) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
      )
    );
  };
  return (
    <>
      <nav className="maNavBar">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </nav>

      <h1 className="titre">Trouver les meilleurs recettes</h1>
      <body>
        {filteredRecipes.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              name={el.name}
              imgSrc={el.imgSrc}
              alternate={el.alternate}
              description={el.description}
              likes={el.likes}
              onLike={() => toggleLike(el.id)}
              favoris={el.favoris}
            />
          );
        })}
      </body>
    </>
  );
}

export default App;
