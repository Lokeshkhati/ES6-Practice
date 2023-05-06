// 1.Create a React app that displays a list of products with their name, price, and category. Implement a feature that allows users to input a maximum price value and filters the displayed list of products to show only those whose price is less than or equal to the input value, using the filter() function.

import { useState } from "react";
import { products } from "../../data/productsData";
const ProductList = () => {
  const [price, setPrice] = useState("");

  const filteredProducts = price
    ? products.filter((product) => product.price <= price)
    : products;

  return (
    <div>
      <div>
        <label htmlFor="price"> Enter Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Enter price..."
        />
      </div>
      <ul>
        {/* {filteredProducts.length === 0 && <h1>Data not Found</h1>} */}
        {filteredProducts.map(({ id, name, category, price }) => (
          <li key={id} style={{ border: "1px solid black", margin: "1rem" }}>
            <h3>Name :{name} </h3>
            <p>Category :{category} </p>
            <h3>rice :{price} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
