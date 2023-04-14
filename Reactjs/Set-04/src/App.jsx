import "./App.css";
import { useState } from "react";
import ChangeBgColor from "./components/ChangeBgColor";
import Coordinate from "./components/Coordinate";
import CharacterCard from "./components/Question01";
import FontSizeCard from "./components/Question02";
import ItemCard from "./components/Question03";
import TodoItem from "./components/Question04";
import TodoItem2 from "./components/Question05";
import { todoItems } from "./constants/todoItems";
import BookCard from "./components/Question06";
import GameCard from "./components/Question07";
function App() {
  // const [count, setCount] = useState(0);
  // const [recordedCount, setRecordedCount] = useState([]);
  // const recordHandler = () => {
  //   setRecordedCount([...recordedCount, count]);
  // };

  return (
    <div className="App">
      {/* <h1>Counter :{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={recordHandler}>Record Count</button>
      {recordedCount.map((recordCount) => (
        <h1 style={{ color: recordCount > 0 ? "green" : "red" }}>
          {recordCount}
        </h1>
      ))} */}

      {/* <ChangeBgColor /> */}
      {/* <Coordinate /> */}
      {/* <CharacterCard /> */}
      {/* <FontSizeCard /> */}
      {/* <ItemCard /> */}
      {/* <TodoItem /> */}
      {/* <TodoItem2 todoItems={todoItems} /> */}
      <BookCard />
      {/* <GameCard /> */}
    </div>
  );
}

export default App;
