// Given an array of characters, build a Tab component in React that shows the name of characters on click of two buttons, one for heroes and other for villains. On click of “Show Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list of villains should be displayed on the DOM. Use useState Hook.
import { useState } from "react";
import { heroes, villains } from "../constants/characters";
const CharacterCard = () => {
  const [characters, setCharacters] = useState([]);
  const [heading, setHeading] = useState("");

  const heroesHandler = () => {
    setCharacters(heroes);
    setHeading("Heroes");
  };
  const villainsHandler = () => {
    setCharacters(villains);
    setHeading("Villains");
  };
  return (
    <div>
      <div>
        <button onClick={heroesHandler}>Show Heroes</button>
        <button onClick={villainsHandler}>Show Villains</button>
      </div>
      <h1>{heading} : </h1>
      <ul>
        {characters.map(({ name, powers, costume }) => (
          <li>
            <h2>{name} </h2>
            <p>powers :{powers} </p>
            <p>costume :{costume} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CharacterCard;
