// 4.Create a React component that fetches a list of users from an API endpoint using useEffect hook and displays the name, email, and website of each user on the screen using the useState hook. Add a dropdown which filters the users by company name.

import { useEffect, useState } from "react";
import { fakeFetch, url, companies } from "../constants/fakeFetch04";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("All");

  const getUsers = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers(url);
  }, []);

  const filteredUsers =
    selectedCompany === "All"
      ? users
      : users.filter(({ company }) => company === selectedCompany);

  return (
    <div>
      {error && <h1>{error} </h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <label>Filter By Company : </label>
          <select onChange={(event) => setSelectedCompany(event.target.value)}>
            <option value="All">All Companies</option>
            {companies.map((company) => (
              <option value={company}>{company} </option>
            ))}
          </select>
          <ul>
            {filteredUsers.map(({ name, email, website, company }) => (
              <li key={name}>
                <h3> {name} </h3>
                <h3> {email} </h3>
                <h3> {website} </h3>
                <h3> {company} </h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserCard;
