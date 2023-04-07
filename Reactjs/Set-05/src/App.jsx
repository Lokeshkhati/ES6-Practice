import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
import UserProfile from "./components/UserProfile";
import UserFeed from "./components/UserFeed";

function App() {
  return (
    <div className="App">
      {/* <UserCard /> */}
      {/* <ProductCard /> */}
      {/* <UserProfile heading="User Profile" width={400} height={300} /> */}
      <UserFeed />
    </div>
  );
}

export default App;
