import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/todoItems')
      .then(res => res.json())
      .then(todoItems => console.log(todoItems))
      .catch(err => console.log(err))
  }, [])

  return (
    <h1>React development has begun!</h1>
  )
}

export default App
