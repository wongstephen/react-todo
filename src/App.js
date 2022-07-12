import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const initalArrayValue = [];
  const [todoArray, setTodoArray] = useState(initalArrayValue);
  function onAddTask(taskValue) {
    if (taskValue === "") return;
    setTodoArray([...todoArray, taskValue]);
  }
  function handleDelItem(id) {
    setTodoArray((preval) => {
      return preval.filter((item, index) => index !== id);
    });
  }
  return (
    <div className="App">
      {/* title */}
      <h1 className="todo-title">Todo</h1>
      {/* form */}
      <TodoForm addTask={onAddTask} />
      {/* todos */}
      <div className="todo-container">
        <ul>
          {todoArray.map((todoItem, index) => (
            <TodoItem
              text={todoItem}
              key={index}
              id={index}
              del={handleDelItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
