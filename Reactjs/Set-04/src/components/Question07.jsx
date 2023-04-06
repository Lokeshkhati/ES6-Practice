// Build a game component in React where the player has a certain number of lives. Display the current number of lives and allows the player to decrement the number of lives by one with a button click. Once the number of lives reaches zero, display a "Game Over" message.useState hook.

import { useState } from "react";
const GameCard = () => {
  const [life, setLife] = useState(5);
  return (
    <div>
      <h1>Current Lives : {life}</h1>
      <button onClick={() => setLife((prevLife) => prevLife - 1)}>
        Lose a Life
      </button>
      {life === 0 && <h1> Game Over</h1>}
    </div>
  );
};
export default GameCard;
