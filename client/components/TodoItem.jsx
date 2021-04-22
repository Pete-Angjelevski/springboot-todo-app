import React from 'react'

export default function TodoItem ({ todoItem }) {
  return (
    <div>
      <p>{todoItem.task}</p>
      <input type="checkbox" checked={todoItem.isDone} ></input>
    </div>
  )
}
