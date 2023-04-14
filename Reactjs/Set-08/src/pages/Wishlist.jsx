import Product from "../components/Product";
import { useProduct } from "../contexts/product-context";

const Wishlist = () => {
  const { wishlist } = useProduct();
  return (
    <div>
      <ul className="product-list">
        {wishlist.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Wishlist;
