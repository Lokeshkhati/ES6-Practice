import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch, url } from "../api/fakeFetch01";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
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

  return (
    <ProductContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
