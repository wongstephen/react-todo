import React, { useState } from "react";

export default function TodoItem(props) {
  const [check, setCheck] = useState(true);
  function handleClick() {
    setCheck(!check);
  }
  function handleDel(event) {
    // event.preventDefault();
    props.del(props.id);
  }
  return (
    <li onClick={handleClick} className='todo-item'>
      <span style={{ color: check ? "black" : "lightgray" }}>
        {props.text}{" "}
      </span>
      <button className="del-button" type="button" onClick={handleDel}>
        Delete
      </button>
    </li>
  );
}
