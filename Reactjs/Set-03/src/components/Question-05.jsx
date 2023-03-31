// Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.
import { useState } from "react";
import { vegetables } from "../utils/vegetables";

const Vegetables = () => {
  const [color, setColor] = useState("");

  const clickHandler = () => {
    setColor("green");
  };
  return (
    <div>
      <button onClick={clickHandler}>Highlight Fresh Vegetables</button>
      <ul>
        {vegetables.map(({ id, name, pickDate }) => (
          <li key={id} style={{ color: pickDate === "2023-03-30" && color }}>
            <h2>{name} </h2>
            <h3>{pickDate} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Vegetables;
