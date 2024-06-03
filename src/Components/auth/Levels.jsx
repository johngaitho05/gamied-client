import Novice from "../../assets/novice.png";
import Apprentice from "../../assets/apprentice.png";
import Hero from "../../assets/hero.png";
import SuperHero from "../../assets/superhero.png";
import Expert from "../../assets/expert.png";
import Master from "../../assets/master.png";

const Levels = [
  {
    name: "Novice",
    image: Novice,
    points: "0-1999XP",
  },
  {
    name: "Apprentice",
    image: Apprentice,
    points: "2000-4999XP",
  },
  {
    name: "Hero",
    image: Hero,
    points: "5000-9999XP",
  },

  {
    name: "SuperHero",
    image: SuperHero,
    points: "10000-19999XP",
  },

  {
    name: "Expert",
    image: Expert,
    points: "20000-49999XP",
  },

  {
    name: "Master",
    image: Master,
    points: "50000XP and Above",
  },
];

export default Levels;
