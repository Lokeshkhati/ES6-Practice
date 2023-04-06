// a. Build a React component that takes the todoItems as props and list all the todo tasks.

// b. Add a "Mark as Done" button against each item and toggle isDone property value between true and false on click of the button. If isDone is true change the color of that task to red with a strikethrough and if it is false remove the strikethrough and the red color.

import { useState } from "react";
const TodoItem2 = ({ todoItems }) => {
  const [todos, setTodos] = useState(todoItems);

  const toggleHandler = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div>
      <ul>
        {todos.map(({ id, task, isDone }) => (
          <>
            <li
              key={id}
              style={{
                textDecoration: isDone ? "line-through" : "",
                color: isDone ? "red" : "",
              }}
            >
              {task}
            </li>
            <button onClick={() => toggleHandler(id)}> Mark is Done </button>
          </>
        ))}
      </ul>
    </div>
  );
};
export default TodoItem2;
