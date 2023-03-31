// Use the cartoons data from above question (2) and build a React component to display only the names of characters whose magnitude is an even number. Use h1 tag to display names. Pass the entire data as props.
import { cartoons } from "../utils/cartoons";

const CartoonsWithEvenMagnitude = () => {
  return (
    <div>
      <ul>
        {cartoons
          .filter((cartoon) => cartoon.magnitude % 2 === 0)
          .map(({ id, name, superpower, magnitude }) => (
            <li key={id}>
              <h2>{name} </h2>
              <h3>{superpower} </h3>
              <h3>{magnitude} </h3>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default CartoonsWithEvenMagnitude;
