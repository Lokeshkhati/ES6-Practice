import { useState } from "react";
const Coordinate = () => {
  const [tags, setTags] = useState([]);

  const drawCircle = (event) => {
    const { clientX, clientY } = event;
    const point = { x: clientX, y: clientY };
    setTags([...tags, point]);
  };

  return (
    <div className="container" onDoubleClick={drawCircle}>
      <button>Redo</button>
      <button>Undo</button>
      {tags.map(({ x, y }, index) => (
        <div
          key={index}
          style={{ position: "absolute", left: x, top: y }}
        >
          <input />
        </div>
      ))}
    </div>
  );
};
export default Coordinate;
