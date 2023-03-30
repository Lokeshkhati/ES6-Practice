// Build a "Todo" React component that takes a prop called "TodoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.

// const todoItems = [
//   {
//     id: 1,
//     title: 'Complete practice set',
//     description: 'Practice set 1 of React',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     title: 'Attend revision session',
//     description: 'Revision session of React',
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     title: 'Watch recording',
//     description: 'Live session recording of React',
//     isCompleted: true,
//   },
//   {
//     id: 4,
//     title: 'Attend DSH',
//     description: 'Doubt Solving Hours of React',
//     isCompleted: false,
//   },
//   {
//     id: 5,
//     title: 'Complete practice set',
//     description: 'Practice set 2 of React',
//     isCompleted: false,
//   },
// ]

const Todo = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((todo) => (
        <li
          key={todo.id}
          style={{ color: todo.isCompleted ? "green" : "red " }}
        >
          <h2> Title : {todo.title} </h2>
          <p> Description {todo.description} </p>
        </li>
      ))}
    </div>
  );
};
export default Todo;
