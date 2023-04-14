import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      {/* <ProductCard /> */}
      <TodoItem />
    </div>
  );
}

export default App;
