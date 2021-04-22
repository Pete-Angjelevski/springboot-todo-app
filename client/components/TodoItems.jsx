import React from 'react'

export default function TodoItems ({ todoItems }) {
  return (
    <div>{todoItems ? todoItems.map(todoItem => {
      return (
        <div key={todoItem.id}>
          <p>{todoItem.task}</p>
          <input type="checkbox" checked={todoItem.isDone} ></input>
        </div>
      )
    }) : 'loading data ...'}
    </div>

  )
}
