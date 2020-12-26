import React from "react";

function TodoList(props) {
  return (
    <li
      onClick={() => {
        props.ondelete(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default TodoList;
