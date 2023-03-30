// Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.

// const red = '#EE4B2B'
// const blue = '#89CFF0'
// const green = '#7FFFD4'

import { useState } from "react";

const ColorPicker = ({ red, blue, green }) => {
  const [hexCode, setHexCode] = useState("");

  const redClickHandler = () => {
    setHexCode(red);
  };
  const blueClickHandler = () => {
    setHexCode(blue);
  };
  const greenClickHandler = () => {
    setHexCode(green);
  };
  return (
    <div>
      <button onClick={redClickHandler}>Red color</button>
      <button onClick={blueClickHandler}>Blue color</button>
      <button onClick={greenClickHandler}>Green color</button>
      {hexCode}
    </div>
  );
};
export default ColorPicker;
