// Build a React component with two buttons + and - which increases/decreases the font size of a heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.
import { useState } from "react";
const FontSizeCard = () => {
  const [fontSize, setFontSize] = useState(18);

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };
  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 1);
  };

  return (
    <div>
      <h1 style={{ fontSize }}>Welcome</h1>
      <button onClick={increaseFontSize}>+</button>
      <button onClick={decreaseFontSize}>-</button>
    </div>
  );
};
export default FontSizeCard;
