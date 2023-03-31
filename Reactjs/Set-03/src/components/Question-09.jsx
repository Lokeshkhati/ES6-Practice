// Given an array of objects representing a list of cars. Each object consists of: id, name, price, category. Build a React component that shows on the DOM the total number of cars present in each category. For Example: if there are categories, luxury and sports, where there are 5 luxury cars and 2 sports car then the data should be represented as:

import { cars } from "../utils/cars";

const Car = () => {
  const results = cars.reduce((acc, curr) => {
    return { ...acc, [curr.category]: (acc[curr.category] || 0) + 1 };
  }, {});

  const { sports, luxury } = results;

  return (
    <div>
      <p> sports : {sports}</p>
      <p> luxury : {luxury} </p>
    </div>
  );
};
export default Car;
