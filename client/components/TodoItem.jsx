import React, { useEffect, useState } from 'react'

export default function TodoItem ({ todoItem }) {
  const [todo, setTodo] = useState(todoItem)
  const [change, setChange] = useState(false)

  useEffect(() => {
    if (change) {
      console.log('updated')
      fetch(`http://localhost.8080/api/v1/todoItems/${todo.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
        .then(res => res.JSON())
        .then(data => {
          setChange(false)
          setTodo(data)
          return null
        })
        .catch(err => console.log(err))
    }
  }, [todo, change])

  return (
    <div>
      <p>{todoItem.task}</p>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          setChange(true)
          setTodo({ ...todo, isDone: !todo.isDone })
        }}
      ></input>
    </div>
  )
}
