import Novice from "../../assets/novice.png";
import Apprentice from "../../assets/apprentice.png";
import Hero from "../../assets/hero.png";
import SuperHero from "../../assets/superhero.png";
import Expert from "../../assets/expert.png";
import Master from "../../assets/master.png";

const Levels = [
  {
    name: "Novice",
    Image: Novice,
    Points: "0-1999Xp",
  },
  {
    name: "Apprentice",
    Image: Apprentice,
    Points: "2000-4999Xp",
  },
  {
    name: "Hero",
    Image: Hero,
    Points: "5000-9999Xp",
  },

  {
    name: "SuperHero",
    Image: SuperHero,
    Points: "10000-19999Xp",
  },

  {
    name: "Expert",
    Image: Expert,
    Points: "20000-49999Xp",
  },

  {
    name: "Master",
    Image: Master,
    Points: "50000Xp and Above",
  },
];

export default Levels;
