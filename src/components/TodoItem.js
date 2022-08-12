import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem({ data, del, patch }) {
  const [struck, setStruck] = useState(data.struck);
  function handleClick() {
    setStruck(!struck);
    patch(data.uuid, !struck);
  }
  function handleDel(event) {
    event.preventDefault();
    del(data.uuid);
  }
  return (
    <li className="todo-item">
      <span
        onClick={handleClick}
        style={{ color: struck ? "lightgray" : "black" }}
      >
        {data.label}
      </span>
      <button className="todoItem__del" type="button" onClick={handleDel}>
        <DeleteIcon />
      </button>
    </li>
  );
}
