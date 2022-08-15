import axios from "axios";

export default function patchTodo(id, value) {
  axios
    .patch(`/todos/${id}`, { struck: value })
    .catch((err) => console.log("error: " + err));
}
