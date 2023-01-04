"use client";

import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ task }) => {
  //   console.log("Todo component");
  return (
    <div>
      <input type="checkbox" />
      <p>{task.name}</p>
      <FaTrashAlt />
    </div>
  );
};

export default Todo;
