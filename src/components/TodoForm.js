import React, { useState } from "react";

export default function TodoForm({ addTask }) {
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    addTask(input);
    setInput("");
  }

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        placeholder="Enter something"
        onChange={handleChange}
        value={input}
        className="form__input"
      ></input>
    </form>
  );
}
