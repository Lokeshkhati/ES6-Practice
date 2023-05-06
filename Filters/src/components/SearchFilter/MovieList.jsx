// 3 Create a React app that displays a list of movies with their title, director, rating, and genre. Implement a feature that allows users to input a rating value and filters the displayed list of movies to show only those whose rating is greater than or equal to the input value, using the filter() function.

import { useState } from "react";
import { movies } from "../../data/moviesData";

const MovieList = () => {
  const [rating, setRating] = useState("");

  const filteredProducts = movies.filter((movie) => movie.rating >= rating);

  return (
    <div>
      <div>
        <label htmlFor="rating"> Enter rating:</label>
        <input
          id="rating"
          type="number"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter rating..."
        />
      </div>
      <ul>
        {filteredProducts.map(({ id, director, genre, title, rating }) => (
          <li key={id} style={{ border: "1px solid black", margin: "1rem" }}>
            <h3>Director :{director} </h3>
            <p>Genre :{genre} </p>
            <h3>Title :{title} </h3>
            <h3>Rating :{rating} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
