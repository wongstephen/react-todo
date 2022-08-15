import axios from "axios";

export default function delTodo(id) {
  axios.delete(`/todos/${id}`).catch((err) => console.log("error: " + err));
}
