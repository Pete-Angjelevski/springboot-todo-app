import React, { useEffect, useState } from 'react'

export default function TodoItem ({ todoItem }) {
  const [todo, setTodo] = useState(todoItem)

  useEffect(() => {
    console.log('updated')
    fetch(`http://localhost.8080/api/v1/todoItems/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo)
    })
  }, [todo])

  return (
    <div>
      <p>{todoItem.task}</p>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => setTodo({ ...todo, isDone: !todo.isDone })}
      ></input>
    </div>
  )
}
