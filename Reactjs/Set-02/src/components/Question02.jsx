// Build a Product component that receives product name and price as props and displays them on DOM.

// The name should be in bold and blue in color
// Price should be in italics and green in color

const Product = ({ name, price }) => {
  return (
    <div>
      <span style={{ color: "blue", fontWeight: "bold" }}>{name}</span>
      <span style={{ color: "green", fontStyle: "italic" }}>{price}</span>
    </div>
  );
};
export default Product;
