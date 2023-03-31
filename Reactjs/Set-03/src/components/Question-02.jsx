// Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5. Data:
import { cartoons } from "../utils/cartoons";

const Cartoons = () => {
  return (
    <div>
      <ul>
        {cartoons
          .filter((cartoon) => cartoon.magnitude > 5)
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
export default Cartoons;
