// Given an array of objects representing people who donated money to the NGO. Each object consists of: id, name, amount. Build a React component that takes the data as props and shows the total donation collected on the DOM. Output should be in the format:

const Donation = ({ DonationData }) => {
  const totalAmount = DonationData.reduce(
    (acc, curr) => acc + curr.Donation,
    0
  );

  return <h1> Total Donation Collected: {totalAmount} </h1>;
};
export default Donation;
