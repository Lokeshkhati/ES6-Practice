import Product from "../components/Product";
import { useProduct } from "../contexts/product-context";

const Cart = () => {
  const { cart } = useProduct();
  return (
    <div>
      <ul className="product-list">
        {cart.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Cart;
