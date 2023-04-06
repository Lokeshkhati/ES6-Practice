// a. Build a React component that takes the todoItems as props and list all the todo tasks. b. if isDone is true then show the item with a strikethrough.
// c. Add a X button against each item and remove that task from the list on click of the button.

import { useState } from "react";
import { todoItems } from "../constants/todoItems";

const TodoItem = () => {
  const [todos, setTodos] = useState(todoItems);

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <div>
      <ul>
        {todos.map(({ id, task, isDone }) => (
          <>
            <li
              key={id}
              style={{ textDecoration: isDone ? "line-through" : "" }}
            >
              {task}
            </li>
            <button onClick={() => deleteHandler(id)}>X</button>
          </>
        ))}
      </ul>
    </div>
  );
};
export default TodoItem;
