// 2.Create a React component that calls the todo api and display the todos in an unordered list and show the todos as a list. The todo should display a heading with a little description of what that todo is about. Under that, it should display all the tasks to be done as a list.

import { fakeFetch, url } from "../constants/fakeFetch02";
import { useEffect, useState } from "react";

const TodoItem = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(todos);

  const getTodos = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setTodos(data.todos);
      setError("");
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return <div>TodoItem</div>;
};
export default TodoItem;


