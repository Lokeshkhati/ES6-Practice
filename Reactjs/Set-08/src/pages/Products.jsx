import { useProduct } from "../contexts/product-context";
import Loader from "../components/Loader";

const Products = () => {
  const { products, isLoading, error } = useProduct();

  if (isLoading) return <Loader />;
  if (error) return <h1 className="error"> {error} </h1>;

  return (
    <>
      <h1>Products : {products.length} </h1>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-card">
            <h3>{product.name}</h3>
            <p>
              <strong>Description : </strong> {product.description}
            </p>
            <p>
              <strong>Price : </strong>${product.price}
            </p>
            <p>
              <strong>Quantity : </strong> {product.quantity}
            </p>
            <p>
              <strong>Category : </strong> {product.category}
            </p>
            <p>
              <strong>Brand : </strong> {product.brand}
            </p>
            <button className="cart-btn">Add to cart</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Products;
