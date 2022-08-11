import React, { useState } from "react";

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
      <button className="del-button" type="button" onClick={handleDel}>
        Delete
      </button>
    </li>
  );
}
