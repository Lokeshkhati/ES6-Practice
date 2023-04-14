//8. Adding on to the previous question, There should be three buttons for this purpose: "Low to High", "High to Low", and "Reset". When the user clicks on "Low to High", the products should be sorted by price in ascending order. When the user clicks on "High to Low", the products should be sorted by price in descending order. When the user clicks on "Reset", the products should be displayed in their original order.

import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch07";

const ProductCard2 = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts(url);
  }, []);

  const getProducts = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) return <h1> Loading... </h1>;
  if (error) return <h1> {error} </h1>;

  const lowToHighHandler = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };
  const highToLowHandler = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };
  const resetHandler = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={lowToHighHandler}> Low to High </button>
      <button onClick={highToLowHandler}> High to Low </button>
      <button onClick={resetHandler}> reset </button>
      <ul>
        {products.map(({ name, description, price, quantity }) => (
          <li key={name}>
            <h2>{name} </h2>
            <p>{description} </p>
            <p>Rs{price} </p>
            <p>Quantity : {quantity} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductCard2;
