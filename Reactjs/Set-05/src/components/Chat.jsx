// Create a React component that fetches chat data from an API endpoint using useEffect hook and display chat data (name and chat message) as a list on the screen using the useState hook.

// a. Show “Loading Chats…” until your data displays on the DOM.
import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch05";
const Chat = () => {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getChats = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      console.log(data);
      setChats(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setChats([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChats(url);
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1> Loading... </h1>
      ) : (
        <ul>
          {chats.map(({ name, messages }, index) => (
            <li key={index}>
              <h1> {name}'s Chat</h1>
              <ul style={{ listStyleType: "circle" }}>
                {messages.map(({ from, message }) => (
                  <li>
                    <h3>{from}: </h3> <span> {message} </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Chat;
