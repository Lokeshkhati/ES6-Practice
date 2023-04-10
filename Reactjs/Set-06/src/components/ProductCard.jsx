import { fakeFetch, url } from "../constants/fakeFetch01";
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
      setError("");
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter(
    ({ name }) => name === selectedProduct
  );
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
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
      )}
    </div>
  );
};
export default ProductCard;
