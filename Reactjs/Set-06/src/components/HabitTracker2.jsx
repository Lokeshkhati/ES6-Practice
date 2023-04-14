// 6. Create a React component that calls the habit tracker api and display only the habits which are unarchived with heading “Unarchived”. Create a show archive button and on click of show archive button show the archive habits and hide the unarchives. Change the heading of the page to “Archived” when the button is clicked.

import { fakeFetch, url } from "../apis/fakeFetch06";
import { useEffect, useState } from "react";

const HabitTracker2 = () => {
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showArchive, setShowArchive] = useState(false);

  const getHabits = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setHabits(data.habits);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHabits();
  }, []);

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const filteredHabits = showArchive
    ? habits.filter((habit) => !habit.archived)
    : habits.filter((habit) => habit.archived);

  const showArchiveHandler = () => {
    setShowArchive(!showArchive);
  };

  return (
    <div>
      <ul>
        <h2> {showArchive ? "Archived" : "Unarchived"}</h2>
        {filteredHabits.length > 0 &&
          filteredHabits.map(({ title, desc, daysFollowed, daysSkipped }) => (
            <li>
              <h3> {title} </h3>
              <p> {desc} </p>
              <h4>Days Followed : {daysFollowed} </h4>
              <h4>Days Skipped : {daysSkipped} </h4>
            </li>
          ))}

        <button onClick={showArchiveHandler}>
          {showArchive ? "Show Unarchieved" : "Show Archieved"}
        </button>
      </ul>
    </div>
  );
};
export default HabitTracker2;
