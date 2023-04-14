// a. Build a React component that displays the title and author of each book.
// b. Add buttons to filter the books by genre using the useState hook.

import { useState } from "react";
import { booksData, genres } from "../constants/books";

const BookCard = () => {
  const [genre, setGenre] = useState("All");

  const filteredBooks =
    genre === "All"
      ? booksData
      : booksData.filter((book) => book.genre === genre);

  return (
    <div>
      <div>
        {genres.map((genre) => (
          <button key={genre} onClick={() => setGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <ul>
        {filteredBooks.map(({ id, title, genre, author }) => (
          <li key={id}>
            <h2>{title} </h2>
            <p>{author} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookCard;
