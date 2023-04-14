// 6.Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and genre of each movie on the screen using the useState hook. Add a dropdown which filters the movies by genre.

import { useEffect, useState } from "react";
import { fakeFetch, url, genres } from "../constants/fakeFetch06";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies(url);
  }, []);

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div>
      {error && <h1>{error} </h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Movies</h1>
          <label htmlFor="">Filter By Genre</label>
          <select onChange={(event) => setSelectedGenre(event.target.value)}>
            <option value="All">All</option>
            {genres.map((genre) => (
              <option key={genre}> {genre} </option>
            ))}
          </select>
          <ul>
            {filteredMovies.map(({ title, year, genre }, index) => (
              <li key={index}>
                <p>{title} </p>
                <p>{year} </p>
                <p>{genre} </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default MovieCard;
