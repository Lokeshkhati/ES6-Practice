// Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.
// const userData = {
//   name: 'John',
//   age: 25,
//   email: 'john@example.com',
// }

const UserProfile = ({ userData }) => {
  const { name, age, email } = userData;
  return (
    <div>
      <h2>Name : {name} </h2>
      <h2> Age : {age} </h2>
      <h2>email : {email} </h2>
    </div>
  );
};
export default UserProfile;
