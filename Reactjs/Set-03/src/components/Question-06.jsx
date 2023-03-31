// Build a React component which takes an array of objects as props. The object represents a bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price of that bouquet on the DOM that has rose in it,

const Bouquet = ({ bouquets }) => {
  return (
    <div>
      <ul>
        {bouquets
          .filter((bouquet) => bouquet.flowers.includes("rose"))
          .map(({ price }) => (
            <li>The price of Rose : {price}</li>
          ))}
      </ul>
    </div>
  );
};
export default Bouquet;
