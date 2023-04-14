//3.  Create a React component that fetches user data from an API endpoint using useEffect hook and displays the user's name, email, and phone number on the screen using the useState hook. Add a button which toggles the display of the user's address (street, suite, city, zipcode).

import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch02";
const UserCard = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAddress, setShowAddress] = useState(false);

  console.log(user);
  const {
    name,
    email,
    phone,
    address: { street, suite, city, zipcode },
  } = user;

  useEffect(() => {
    getUser(url);
  }, []);
  const getUser = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) return <h1> Loading... </h1>;
  if (error) return <h1> {error} </h1>;
  return (
    <div>
      <h1>User</h1>
      <p> Name : {name} </p>
      <p> Email : {email} </p>
      <p> Phone : {phone} </p>
      {showAddress && (
        <>
          <p> Street : {street} </p>
          <p> City : {city} </p>
          <p> Zipcode : {zipcode} </p>
        </>
      )}

      <button onClick={() => setShowAddress(!showAddress)}>
        {showAddress ? "Hide Address" : "Show Address"}
      </button>
    </div>
  );
};
export default UserCard;
