// Build a React component which takes an array of objects as props. The object represents a bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price of that bouquet on the DOM that has rose in it,

import { bouquet } from "../utils/bouquet";
const BouquetCard = () => {
  return (
    <div>
      <ol>
        {bouquet
          .filter(({ price }) => price > 2000)
          .map(({ flowers }) =>
            flowers.map((flower) => <li key={flower}>{flower} </li>)
          )}
      </ol>
    </div>
  );
};
export default BouquetCard;
