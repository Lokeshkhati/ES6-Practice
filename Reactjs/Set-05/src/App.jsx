import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      {/* <UserCard /> */}
      {/* <ProductCard /> */}
      <UserProfile heading="User Profile" width={400} height={300} />
    </div>
  );
}

export default App;
