// Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.
// const products = [
//   {
//     id: 1,
//     name: 'keyboard',
//     description: 'Logitech Mechanical Keyboard',
//     price: 2000,
//   },
//   { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
//   {
//     id: 3,
//     name: 'monitor',
//     description: 'Lenovo 32-inch display Monitor',
//     price: 10000,
//   },
//   { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
//   {
//     id: 5,
//     name: 'speakers',
//     description: 'Creative Desktop Speakers',
//     price: 5000,
//   },
//   {
//     id: 6,
//     name: 'headphones',
//     description: 'Sony over-the-ear wired Headphones with mic',
//     price: 1500,
//   },
//   { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
// ]

const Gadgets = ({ products }) => {
  return (
    <ul>
      {products
        .filter((product) => product.price > 50000)
        .map(({ id, name, description, price }) => (
          <li key={id}>
            <h3>{name} </h3>
            <p>{description} </p>
            <p>{price} </p>
          </li>
        ))}
    </ul>
  );
};
export default Gadgets;
