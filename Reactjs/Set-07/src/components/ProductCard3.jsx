//9. Create a React component that uses the useEffect hook to fetch the product data from the API endpoint using the fakeFetch function provided below. The component should use the useState hook to store the fetched data and a second state variable to store the sorted data. The sorted data should be sorted in descending order by rating.

//10.  Adding on to the previous question, Add a search bar to the component that allows users to filter the products by name. The search bar should update the list of displayed products in real-time as the user types. The search functionality should be case-insensitive.

import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch09";

const ProductCard3 = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getProducts(url);
  }, []);

  const getProducts = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setProducts(data.products.sort((a, b) => b.rating - a.rating));
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) return <h1> Loading... </h1>;
  if (error) return <h1> {error} </h1>;

  const foundProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="search here..."
      />
      <ul>
        {foundProducts.map(({ name, rating, price, quantity }) => (
          <li key={name}>
            <h2>{name} </h2>
            <p>Rating : {rating} </p>
            <p>Price : Rs {price} </p>
            <p>Quantity : {quantity} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductCard3;
