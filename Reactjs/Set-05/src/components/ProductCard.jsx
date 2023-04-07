// Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.

// a. Add a button, on click of which it displays only the items with more than 20 as quantity.

const url = "https://example.com/api/products";
import { useEffect, useState } from "react";
import { fakeFetch } from "../constants/fakeFetch02";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setProducts(data.products);
      setError("");
    } catch (error) {
      setError(error.message);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts(url);
  }, []);

  const filterProducts = () => {
    const filteredProducts = products.filter(({ quantity }) => quantity > 20);
    setProducts(filteredProducts);
  };
  const filterByPrice = () => {
    const filteredProducts = products.filter(({ price }) => price < 100);
    setProducts(filteredProducts);
  };

  return (
    <div>
      {error && <h1>{error}</h1>}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          <h1>Products</h1>
          <button onClick={filterProducts}>
            Show products with quantity more than 20
          </button>
          <button onClick={filterByPrice}>Filter by Price.</button>
          {products.map(({ name, price, quantity }) => (
            <li key={name}>
              <h1>
                {name} Rs :{price} Quantity : {quantity}{" "}
              </h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ProductCard;
