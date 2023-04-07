// Create a React component that fetches a user’s data from an API endpoint using useEffect hook and displays the data (name, image, likes, comments) on the screen using the useState hook. Pass heading (”User Profile”) and width and height for image as props to the component.

import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch03";
const UserProfile = ({ heading, width, height }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { name, image, likes, comments } = user;

  const getUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setUser(data);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {error && <h1> {error} </h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={image} alt="user-img" style={{ width, height }} />
          <h2> Name : {name} </h2>
          <h2> Likes : {likes} </h2>
          <h2> Comments : {comments} </h2>
        </div>
      )}
    </div>
  );
};
export default UserProfile;
