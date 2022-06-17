import React from 'react'

export default function Todo({todo, index, remove}) {
  function handle() {
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>
      {todo.task} (-)
    </div>
  );
}