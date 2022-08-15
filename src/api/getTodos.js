import axios from "axios";

export default function getTodoData(setTodoArray, setLoading) {
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
