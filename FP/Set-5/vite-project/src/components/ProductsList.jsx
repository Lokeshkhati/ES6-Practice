// Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.
const ProductsList = () => {
  const products = [
    { id: 1, name: " i Phone", category: "phone", price: 500 },
    { id: 2, name: "Apple watch", category: "watch", price: 890 },
    { id: 3, name: "Mackbook pro", category: "laptop", price: 530 },
    { id: 4, name: "oppo earbuds", category: "earphone", price: 200 },
  ];
  return <div>ProductsList</div>;
};
export { ProductsList };
