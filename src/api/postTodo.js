import axios from "axios";

export default function postTodo(taskValue) {
  if (taskValue === "") return;
  axios
    .post("todos", { label: taskValue, struck: false, complete: false })
    .catch((err) => console.log("error: " + err));
}
