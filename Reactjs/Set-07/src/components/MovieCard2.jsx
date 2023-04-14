// 3.Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and rating of each movie on the screen using the useState hook. Add a dropdown which filters the movies by year. You can keep 5 dropdown values - 2005 to 2010.

import { useEffect, useState } from "react";
import { fakeFetch, url, years } from "../constants/fakeFetch03";

const MovieCard2 = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  useEffect(() => {
    getMovies(url);
  }, []);

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

  const filteredMovies =
    selectedYear === "All"
      ? movies
      : movies.filter((movie) => movie.year === Number(selectedYear));

  if (isLoading) return <h1> Loading... </h1>;
  if (error) return <h1> {error} </h1>;
  return (
    <div>
      <div>
        <h1>Movies</h1>
        <label htmlFor="">Filter By Genre</label>
        <select onChange={(event) => setSelectedYear(event.target.value)}>
          <option value="All">All</option>
          {years.map((year) => (
            <option key={year}> {year} </option>
          ))}
        </select>
        {filteredMovies.length > 0 ? (
          <ul>
            {filteredMovies.map(({ title, year, rating }, index) => (
              <li key={index}>
                <p>{title} </p>
                <p>{year} </p>
                <p>{rating} </p>
              </li>
            ))}
          </ul>
        ) : (
          <h1>Movie not found</h1>
        )}
      </div>
    </div>
  );
};
export default MovieCard2;
