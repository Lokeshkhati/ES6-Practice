import { useParams } from "react-router-dom";
import { useProduct } from "../contexts/product-context";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const { products, isLoading } = useProduct();
  const { productId } = useParams();

  // if (isLoading) return <Loader />;
  const product = products.find((product) => product.id === Number(productId));
  const { id, description, price, name, quantity, category, brand } = product;
  return (
    <div>
      <li className="product-card">
        <h3>{name}</h3>
        <p>
          <strong>Description : </strong> {description}
        </p>
        <p>
          <strong>Price : </strong>${price}
        </p>
        <p>
          <strong>Quantity : </strong> {quantity}
        </p>
        <p>
          <strong>Category : </strong> {category}
        </p>
        <p>
          <strong>Brand : </strong> {brand}
        </p>
      </li>
    </div>
  );
};
export default ProductDetail;
