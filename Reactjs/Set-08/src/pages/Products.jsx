import { useProduct } from "../contexts/product-context";
import Loader from "../components/Loader";
import Product from "../components/Product";

const Products = () => {
  const { products, isLoading, error } = useProduct();

  if (isLoading) return <Loader />;
  if (error) return <h1 className="error"> {error} </h1>;

  return (
    <>
      <h1>Products : {products.length} </h1>
      <ul className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};
export default Products;
