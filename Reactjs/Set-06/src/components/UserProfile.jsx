// 8. Create a React component that calls the userProfile api and list the details of the user when the page loads. Create a button saying Update name and on click of that button, change the name of the user.

import { fakeFetch, url } from "../apis/fakeFetch08";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { name, age, gender, email, occupation } = user;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setUser(data.profiles);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;
  const updateNameHandler = () => {
    setUser({ ...user, name: "Emily" });
  };

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        <li>
          <p>
            <strong>Name</strong> : {name}
          </p>
          <p>
            <strong>Email</strong> : {email}
          </p>
          <p>
            <strong>Age</strong> : {age}
          </p>
          <p>
            <strong>Gender</strong> : {gender}
          </p>
          <p>
            <strong>Occupation</strong> : {occupation}
          </p>
          <button onClick={updateNameHandler}>Update Name</button>
        </li>
      </ul>
    </div>
  );
};
export default UserProfile;
