// 3.Create a React component that calls the habit tracker api when the page is loaded completely and display the habits with the total days they were followed and days skipped in between.

import { fakeFetch, url } from "../apis/fakeFetch03";
import { useEffect, useState } from "react";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
  return (
    <div>
      <ul>
        {habits.length > 0 &&
          habits.map(({ title, desc, daysFollowed, daysSkipped }) => (
            <li>
              <h2> {title} </h2>
              <p> {desc} </p>
              <h3>Days Followed : {daysFollowed} </h3>
              <h3>Days Followed : {daysFollowed} </h3>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HabitTracker;
