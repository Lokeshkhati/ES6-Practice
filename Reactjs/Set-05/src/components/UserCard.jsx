// Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.
const url = "https://example.com/api/users/status";
import { useEffect, useState } from "react";
import { fakeFetch } from "../constants/fakeFetch01";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setUsers(data.users);
      setError("");
    } catch (error) {
      setError(error.message);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1> Loading... </h1>}
      <ul>
        {users.map(({ name, status }, index) => (
          <li key={index}>
            <h1 style={{ color: status === "Online" ? "green" : "red" }}>
              {name} - {status}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserCard;
