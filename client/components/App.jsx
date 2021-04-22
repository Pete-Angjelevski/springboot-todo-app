import React, { useState, useEffect } from 'react'

const App = () => {
  const [todoItems, setTodoItems] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/todoItems')
      .then(res => res.json())
      .then(data => {
        console.log('Todo Items list: ', data)
        setTodoItems(data)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>{todoItems ? todoItems.map(todoItem => {
      return (
        <div key={todoItem.id}>
          <p>{todoItem.task}</p>
          <input type="checkbox" checked={todoItem.isDone} onChange={}></input>
        </div>
      )
    }) : 'loading data ...'}
    </div>

  )
}

export default App
