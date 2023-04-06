// a. Build a React component that displays a list of items. Display fruits in orange color and vegetables in green color.
// b. Create two buttons to filter the items by their category using the useState hook.

import { useState } from "react";
import { itemList } from "../constants/items";

const ItemCard = () => {
  const [items, setItems] = useState(itemList);

  const fruitHandler = () => {
    const updatedItems = itemList.filter((item) => item.category === "Fruit");
    setItems(updatedItems);
  };

  const vegetableHandler = () => {
    const updatedItems = itemList.filter(
      (item) => item.category === "Vegetable"
    );
    setItems(updatedItems);
  };

  return (
    <div>
      <div>
        <button onClick={() => setItems(itemList)}>All</button>
        <button onClick={fruitHandler}>Fruit</button>
        <button onClick={vegetableHandler}>Vegetables</button>
      </div>

      <ul>
        {items.map(({ id, name, category }) => (
          <li
            key={id}
            style={{ color: category === "Fruit" ? "orange" : "green" }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemCard;
