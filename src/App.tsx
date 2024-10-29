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
      "Une des recettes emblématique de la cuisine portugaise... après les ptits flans",
    likes: 0,
    isFavoris: false,
    recettedDescription:
      "Étape 1 : Laisser dessaler la morue dans de l'eau (que vous renouvelez régulièrement) environ 24 heures avant de commencer la préparation. Étape 2 : C'est indispensable à la bonne réalisation de ce plat car sinon, ce serait immangeable, car trop salé!! Étape 3 : Découper la morue en petits morceaux, en retirant méticuleusement les arêtes. Étape 4 : Faire revenir les oignons et l'ail émincés dans l'huile de tournesol et l'huile d'olive. Étape 5 : Faire revenir pendant 5 minutes les morceaux de morue avec l'oignon et l'ail. Étape 6 : Réserver. Étape 7 : Découper les pommes de terre en frites très fines. Les plonger dans la friteuse pour qu'elles soient précuites (et non cuites !!!). Étape 8 : Mélanger les frites, la morue, les oignons et l'ail ensemble dans la poêle. Refaire chauffer pendant 5 minutes. Étape 9 : Battre les oeufs en omelette, saler, poivrer. Mettre cette préparation avec la morue 1 minute avant la fin de la cuisson. Laisser chauffer quelques instants tout en remuant (faire attention à ne pas cuire les oeufs). Étape 10 : Saupoudrer de persil et mélanger. Étape 11 : Décorer d'olives noires et de tomates cerises.",
  },
  {
    id: 2,
    name: "Blanquette de veau",
    imgSrc: "src/assets/img/Blanquette_veau-min.jpg",
    alternate: "Picture of blanquette de veau",
    description:
      "Pour ceux qui aiment la cuisine du terroir, le veau, la crème.",
    likes: 0,
    isFavoris: false,
    recettedDescription:
      "Étape 1 : Faire revenir la viande dans un peu de beurre doux jusqu'à ce que les morceaux soient un peu dorés. Étape 2 : Saupoudrer de 2 cuillères de farine. Bien remuer. Étape 3 : Ajouter 2 ou 3 verres d'eau, les cubes de bouillon, le vin et remuer. Ajouter de l'eau si nécessaire pour couvrir. Étape 4 : Couper les carottes en rondelles et émincer les oignons puis les incorporer à la viande, ainsi que les champignons. Étape 5 : Laisser mijoter à feu très doux environ 1h30 à 2h00 en remuant. Étape 6 : Si nécessaire, ajouter de l'eau de temps en temps. Étape 7 : Dans un bol, bien mélanger la crème fraîche, le jaune d’oeuf et le jus de citron. Ajouter ce mélange au dernier moment, bien remuer et servir tout de suite.",
  },
  {
    id: 3,
    name: "Boeuf bourguignon",
    imgSrc: "src/assets/img/boeuf_bourguignon-min.jpg",
    alternate: "Picture of boeuf bourguignon",
    description: "Du boeuf, des carottes et du vin...",
    likes: 0,
    isFavoris: false,
    recettedDescription:
      "Tailler le bœuf en cubes de 3 à 4 cm de côte. Peler les oignons sans les écorcher. Peler et couper les carottes en rondelles pas trop fines (2mm au minimum). Peler l'ail et enlever le germe. Dans une grande cocotte, faire fondre le beurre. Ajouter les oignons entiers et les lardons. Faire revenir en remuant constamment. Lorsqu'ils sont dorés, les retirer avec un écumoire, et réserver. Dans la même cocotte, faire revenir les morceaux de viande à feu vif. Ajouter les carottes, et faire revenir encore 5 mn. Lorsque la viande est bien dorée, saupoudrer de farine (60g) et laisser roussir en remuant toujours. Verser le bouillon (que vous aurez préparé en faisant fondre les 2 cubes de bouillon de viande dans 50 cl d'eau bouillante). Bien gratter les sucs. Remettre les lardons et les oignons dans la cocotte. Verser le vin rouge. Saler, poivrer et ajouter le bouquet garni et les gousses d'ail écrasées. Porter à ébullition. Couvrir et laisser mijoter doucement pendant 3 heures (petits bouillons).",
  },
  {
    id: 4,
    name: "Coquillettes au jambon",
    imgSrc: "src/assets/img/coquillettes_jambon-min.jpg",
    alternate: "Picture of coquillettes au jambon",
    description: "Le plat préféré des 4-10ans",
    likes: 0,
    isFavoris: false,
    recettedDescription:
      "Étape 1 : Sur une planche de cuisine, découpez les tranches de jambon en lanières et mettez de côté. Étape 2 : Mettez une casserole d'eau salée au feu et laissez chauffer jusqu’à ébullition. Étape 3 : Jetez-y les coquillettes et mélangez pour éviter qu'elles se collent. Étape 4 : Laissez cuire pendant 10 min puis, égouttez vos coquillettes cuites dans une passoire adaptée. Étape 5 : Ensuite, répartissez-les dans quatre assiettes. Étape 6 : Dans chaque assiette, versez 1 c. à soupe de crème fraîche. Étape 7 : Ajoutez ensuite, les lanières de jambon. Étape 8 : Servez.",
  },
  {
    id: 5,
    name: "Lasagnes",
    imgSrc: "src/assets/img/lasagnes-min.jpg",
    alternate: "Picture of lasagnes",
    description: "Ma qué ça sent bon la mama dé la familia!",
    likes: 0,
    isFavoris: false,
    recettedDescription:
      "Étape 1 : Faire revenir gousses hachées d'ail et les oignons émincés dans un peu d'huile d'olive. Étape 2 : Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. Étape 3 : Au bout de quelques minutes, ajouter le vin rouge. Laisser cuire jusqu'à évaporation. Étape 4 : Ajouter la purée de tomates, l'eau et les herbes. Saler, poivrer, puis laisser mijoter à feu doux 45 minutes. Étape 5 : Préparer la béchamel : faire fondre 100 g de beurre. Étape 6 : Hors du feu, ajouter la farine d'un coup. Étape 7 : Remettre sur le feu et remuer avec un fouet jusqu'à l'obtention d'un mélange bien lisse. Étape 8 : Ajouter le lait peu à peu. Étape 9 : Remuer sans cesse, jusqu'à ce que le mélange s'épaississe. Étape 10 : Ensuite, parfumer avec la muscade, saler, poivrer. Laisser cuire environ 5 minutes, à feu très doux, en remuant. Réserver. Étape 11 : Préchauffer le four à 200°C (thermostat 6-7). Huiler le plat à lasagnes. Poser une fine couche de béchamel puis des feuilles de lasagnes, de la bolognaise, de la béchamel et du parmesan. Répéter l'opération 3 fois de suite. Étape 12 : Enfourner pour environ 25 minutes de cuisson.",
  },
  {
    id: 6,
    name: "Omelettes aux oignons",
    imgSrc: "src/assets/img/Omelette_oignons-min.jpg",
    alternate: "Picture of omelette aux oignons",
    description: "Une recette pour célibataire uniquement.",
    likes: 0,
    isFavoris: false,
    recettedDescription:
      "Étape 1 : Eplucher l'oignon et le faire revenir dans une poêle. Étape 2 : Quand l'oignon est transparent, couvrir (sans plus) avec le vin blanc. Faire bouillir pour enlever l'amertume et ensuite laisser cuire à feu doux en surveillant. Étape 3 : Quand l'oignon est cuit, faire une omelette avec 3 ou 4 oeufs (suivant l'appétit) que l'on verse sur l'oignon. Étape 4 : Manger chaud et bon appétit !",
  },
  {
    id: 7,
    name: "Potée au chou vert",
    imgSrc: "src/assets/img/Potee_chou vert-min.jpg",
    alternate: "Picture of potée au chou vert",
    description: "Vous avez vu la soupe aux choux?",
    likes: 0,
    favoris: false,
    recettedDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem id modi, excepturi optio nisi ducimus dicta officiis vero iure! Dolorem error sequi quae? Omnis labore tempore quo voluptate neque?",
  },
  {
    id: 8,
    name: "Choucroute",
    imgSrc: "src/assets/img/choucroute-min.jpg",
    alternate: "Picture of choucroute",
    description:
      "La meilleure recette...à consommer seulement avec un riesling et en parlant Allemand",
    likes: 0,
    favoris: false,
    recettedDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias ullam officiis eaque nemo fugiat magnam minus possimus, perferendis excepturi, deleniti tempora! Aliquam enim veritatis, provident in odit recusandae minima.",
  },
  {
    id: 9,
    name: "Ramen",
    imgSrc: "src/assets/img/ramen-min.jpg",
    alternate: "Picture of ramen",
    description: "Parfait pour l'hiver en regardant votre anime préféré",
    likes: 0,
    favoris: false,
    recettedDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quod itaque? Sed soluta numquam iure consectetur eum velit, incidunt libero recusandae odit, necessitatibus repudiandae adipisci? Veniam assumenda quae neque odit?",
  },
];
// import Recette from "./Components/recette";

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
      <h2 className="titre">Trouver les meilleures recettes</h2>
      <main>
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
              recettedDescription={el.recettedDescription}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
