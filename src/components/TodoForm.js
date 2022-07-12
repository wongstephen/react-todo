import React, { useEffect, useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    props.addTask(input);
    setInput("");
  }
  // useEffect(() => console.log(input), [input]);

  return (
    <form>
      <input
        type="text"
        placeholder="Enter something"
        onChange={handleChange}
        value={input}
      ></input>
      <button type="submit" onClick={handleClick}>
        Send
      </button>
    </form>
  );
}
