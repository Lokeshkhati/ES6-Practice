import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
import UserProfile from "./components/UserProfile";
import UserFeed from "./components/UserFeed";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      {/* <UserCard /> */}
      {/* <ProductCard /> */}
      {/* <UserProfile heading="User Profile" width={400} height={300} /> */}
      {/* <UserFeed /> */}
      <Chat />
    </div>
  );
}

export default App;
