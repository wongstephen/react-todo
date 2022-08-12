import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
// const axios = require("axios");
import axios from "axios";

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
    <div className="app__container">
      <h1 className="app__title">Awesome Todo List</h1>
      <TodoForm addTask={onAddTask} />
      <div className="todo-container">
        <ul>
          {loading ? (
            <center>
              <div className="dot-wave">
                <div className="dot-wave__dot"></div>
                <div className="dot-wave__dot"></div>
                <div className="dot-wave__dot"></div>
                <div className="dot-wave__dot"></div>
              </div>
            </center>
          ) : (
            todoArray
              .slice(0)
              .sort((a, b) => {
                if (a.created_date < b.created_date) {
                  return -1;
                }
                if (a.created_date > b.created_date) {
                  return 1;
                }
                return 0;
              })
              .reverse()
              .map((todoItem) => (
                <TodoItem
                  key={todoItem.uuid}
                  data={todoItem}
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
