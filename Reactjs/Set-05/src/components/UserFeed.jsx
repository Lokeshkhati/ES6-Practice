// Create a React component that fetches users data from an API endpoint using useEffect hook and display users data (name, image, likes, comments) as a list on the screen using the useState hook.

// a. Show “Loading…” until your data displays on the DOM.

// b. Handle errors by showing an error message on the DOM, in case of any error.

import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch04";
const UserFeed = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getUsers = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setUsers(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers(url);
  }, []);

  return (
    <div>
      {error && <h1>{error} </h1>}
      {isLoading ? (
        <h1> Loading...</h1>
      ) : (
        <ul>
          {users.map(({ name, image, likes, comments }) => (
            <li>
              <img src={image} alt="" style={{ width: "300px" }} />
              <h2> {name} </h2>
              <h2>Likes : {likes} </h2>
              <h2> Comments : {comments} </h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default UserFeed;
