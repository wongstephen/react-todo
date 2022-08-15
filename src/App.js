import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

//API
import getTodoData from "./api/getTodos";
import postTodo from "./api/postTodo";
import delTodo from "./api/delTodo";
import patchTodo from "./api/patchTodo";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodoData(setTodoArray, setLoading);
  }, [todoArray]);

  return (
    <div className="app__container">
      <h1 className="app__title">Awesome Todo List</h1>
      <TodoForm addTask={postTodo} />
      <div className="todo__container">
        <ul className="todo__container__table">
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
                  del={delTodo}
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
