import React, { useState, useEffect } from 'react'

import TodoItems from './TodoItems'

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
    <>
      <TodoItems todoItems={todoItems}/>
    </>
  )
}

export default App
