import { useState } from "react";
const ChangeBgColor = () => {
  const colors = ["red", "green", "blue", "yellow", "lightgreen"];
  const [bgColor, setBgColor] = useState("");

  return (
    <div
      style={{
        border: "2px solid black",
        height: "100vh",
        backgroundColor: bgColor,
      }}
    >
      {colors.map((color) => (
        <button key={color} onClick={() => setBgColor(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};
export default ChangeBgColor;
