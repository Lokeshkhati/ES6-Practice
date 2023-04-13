import { useProduct } from "../contexts/product-context";
const Product = ({ product }) => {
  const { id, description, price, name, quantity, category, brand } = product;

  const { cart, setCart, wishlist, setWishlist } = useProduct();

  const addToCart = (product) => {
    setCart([product, ...cart]);
  };

  const addToWishlist = (product) => {
    setWishlist([product, ...wishlist]);
  };
  const isInCart = cart.find((product) => product.id === id);
  console.log(isInCart);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };
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
        {/* {isInCart ? (
          <button className="cart-btn" onClick={() => removeFromCart(id)}>
            Remove from cart
          </button>
        ) : ( */}
        <button
          className="cart-btn"
          disabled={isInCart}
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
        {/* )} */}
        <button className="cart-btn" onClick={() => addToWishlist(product)}>
          Add to Wishlist
        </button>
      </li>
    </div>
  );
};
export default Product;
