// 2.Create a React component that calls the todo api and display the todos in an unordered list and show the todos as a list. The todo should display a heading with a little description of what that todo is about. Under that, it should display all the tasks to be done as a list.

import { fakeFetch, url } from "../apis/fakeFetch02";
import { useEffect, useState } from "react";

const TodoItem = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getTodos = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setTodos(data.todos);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <ul>
        {todos.length > 0 &&
          todos.map(({ title, desc, todos }) => (
            <li key={title}>
              <h3>
                {title}: {desc}
              </h3>
              <ol>
                {todos.length > 0 &&
                  todos.map((todo) => <li key={todo}>{todo} </li>)}
              </ol>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default TodoItem;
