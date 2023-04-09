// 5.Create a component that displays a random quote from an API using the useEffect and useState hooks. The component should fetch a new quote when the user clicks a button.

import { useEffect, useState } from "react";
import { fakeFetch } from "../constants/fakeFetch05";
const Quote = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getQuote = async () => {
    setIsLoading(true);
    try {
      const data = await fakeFetch();
      setQuote(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      {error && <h1>{error} </h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <p>"{quote.content} "</p>
          <h3> - {quote.author} </h3>
          <button onClick={getQuote}>New Quote</button>
        </div>
      )}
    </div>
  );
};
export default Quote;
