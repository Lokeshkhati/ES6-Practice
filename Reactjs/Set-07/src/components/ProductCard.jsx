// 7.Create a React component that fetches a list of products from an e-commerce API endpoint using useEffect hook and displays the product name, description, price, and quantity on the screen using the useState hook. Add a button which allows the user to sort the products by price (lowest to highest).
import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch07";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  useEffect(() => {
    getProducts(url);
  }, []);

  const sortByPriceHandler = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={sortByPriceHandler}> Sort by price </button>
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
export default ProductCard;
