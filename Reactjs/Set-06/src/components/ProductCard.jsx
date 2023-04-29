// 1. Create a React component that calls the product api and has the same number of buttons as the items in product. On Click of each button show the details of that card only. Example: In the below API we have three products and three buttons.
import { fakeFetch, url } from "../apis/fakeFetch01";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const names = products.map(({ name }) => name);

  const getProducts = async () => {
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
    getProducts();
  }, []);

  const filteredProducts = selectedProduct
    ? products.filter(({ name }) => name === selectedProduct)
    : products;

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <>
        <div>
          <h1>Products :{products.length} </h1>
          {names.map((name) => (
            <button onClick={() => setSelectedProduct(name)}> {name} </button>
          ))}
        </div>
        <ul>
          {filteredProducts.map(({ name, price, desc, src, inStock }) => (
            <li>
              <img src={src} alt="" />
              <h1> Name : {name} </h1>
              <p>
                <strong>Price</strong> : Rs {price}
              </p>
              <p>
                <strong>Description</strong> : {desc}
              </p>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};
export default ProductCard;
