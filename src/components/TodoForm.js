import React, { useState } from "react";

export default function TodoForm({ addTask }) {
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    addTask(input);
    setInput("");
  }

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What would you like to do today?"
        onChange={handleChange}
        value={input}
      ></input>
    </form>
  );
}
