// Use the cartoons data from above question (2) and build a React component that takes the superpower ”Intelligence”, as prop and display the details of the character having that super power. Show details on DOM in the format “name - superpower - magnitude”.
import { cartoons } from "../utils/cartoons";

const CartoonsWithIntelligence = ({superpower}) => {
  console.log(superpower);
  return (
    <div>
      <ul>
        {cartoons
          .filter((cartoon) => cartoon.superpower === superpower)
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
export default CartoonsWithIntelligence;
