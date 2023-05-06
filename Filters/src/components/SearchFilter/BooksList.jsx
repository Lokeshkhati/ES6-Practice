// 2.Create a React app that displays a list of books with their title, author, genre, and publication year. Implement a feature that allows users to input a year value and filters the displayed list of books to show only those whose publication year is greater than or equal to the input value, using the filter() function.

import { useState } from "react";
import { books } from "../../data/booksData";

const BooksList = () => {
  const [year, setYear] = useState("");

  const filteredProducts = books.filter((book) => book.year >= year);

  return (
    <div>
      <div>
        <label htmlFor="year"> Enter year:</label>
        <input
          id="year"
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          placeholder="Enter year..."
        />
      </div>
      <ul>
        {filteredProducts.map(({ id, author, genre, title, year }) => (
          <li key={id} style={{ border: "1px solid black", margin: "1rem" }}>
            <h3>Author :{author} </h3>
            <p>Genre :{genre} </p>
            <h3>Title :{title} </h3>
            <h3>Year :{year} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BooksList;
