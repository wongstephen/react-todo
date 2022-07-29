import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  function getFetch() {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodoArray(data.items);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }
  function postTodo(value) {
    fetch("/todos", {
      method: "POST",
      body: JSON.stringify({ label: value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTodoArray((val) => [...val, data]))
      .catch((err) => console.log(err));
  }

  function delTodo(id) {
    setLoading(true);
    fetch(`/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(getFetch())
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getFetch();
  }, []);

  const initalArrayValue = [];
  const [todoArray, setTodoArray] = useState(initalArrayValue);
  const [loading, setLoading] = useState(true);

  function onAddTask(taskValue) {
    if (taskValue === "") return;
    postTodo(taskValue);
  }
  function handleDelItem(id) {
    console.log(id);
    delTodo(id);
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
          {loading ? (
            <div>loading</div>
          ) : (
            todoArray.map((todoItem) => (
              <TodoItem
                text={todoItem.label}
                key={todoItem.uuid}
                id={todoItem.uuid}
                del={handleDelItem}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
