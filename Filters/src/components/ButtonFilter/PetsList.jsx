// 2.Create a React app that displays a list of books with their title, author, genre, and publication year. Implement a feature that allows users to input a year value and filters the displayed list of books to show only those whose publication year is greater than or equal to the input value, using the filter() function.

import { useState } from "react";
import { pets, petsTypes } from "../../data/petsData";

const PetsList = () => {
  const [petType, setPetType] = useState("");

  const filteredPets = petType
    ? pets.filter((pet) => pet.type === petType)
    : pets;

  return (
    <div>
      <div>
        {petsTypes.map((pet) => (
          <button onClick={() => setPetType(pet)}>{pet} </button>
        ))}
      </div>
      <ul>
        {filteredPets.map(({ id, name, type, owner }) => (
          <li key={id} style={{ border: "1px solid black", margin: "1rem" }}>
            <h3>Name :{name} </h3>
            <p>Type :{type} </p>
            <h3>Owner :{owner} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PetsList;
