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
    <form className="todo__form" onSubmit={handleClick}>
      <input
        type="text"
        placeholder="What would you like to do today?"
        onChange={handleChange}
        value={input}
      ></input>
    </form>
  );
}
