import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
const axios = require("axios");

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [loading, setLoading] = useState(true);

  function getFetch() {
    axios
      .get("/todos", {
        proxy: {
          host: "localhost",
          port: 3000,
        },
      })
      .then((res) => {
        setTodoArray(res.data.items);
        setLoading(false);
      })
      .catch((err) => console.log("error: " + err));
  }

  function postTodo(value) {
    axios
      .post("todos", { label: value, struck: false, complete: false })
      .catch((err) => console.log("error: " + err));
  }

  function delTodo(id) {
    axios.delete(`/todos/${id}`).catch((err) => console.log("error: " + err));
  }

  function patchTodo(id, value) {
    axios
      .patch(`/todos/${id}`, { struck: value })
      .catch((err) => console.log("error: " + err));
  }

  useEffect(() => {
    getFetch();
  }, [todoArray]);

  function onAddTask(taskValue) {
    if (taskValue === "") return;
    postTodo(taskValue);
  }
  function handleDelItem(id) {
    delTodo(id);
  }

  return (
    <div className="App">
      <h1 className="todo-title">Todo</h1>
      <TodoForm addTask={onAddTask} />
      <div className="todo-container">
        <ul>
          {loading ? (
            <div>loading</div>
          ) : (
            todoArray.map((todoItem) => (
              <TodoItem
                data={todoItem}
                key={todoItem.uuid}
                del={handleDelItem}
                patch={patchTodo}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
