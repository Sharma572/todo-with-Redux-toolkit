import React from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });
  //   console.log(todos);
  return (
    <>
    <ul className="task-list">
      {todos.map((todo) => (
        <TodoItems id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
    </>
  );
};

export default TodoList;
