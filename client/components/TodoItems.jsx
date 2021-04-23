import React from 'react'

import TodoItem from './TodoItem'

export default function TodoItems ({ todoItems }) {
  return (
    <ul>{todoItems ? todoItems.map(todoItem => {
      return (
        <li key={todoItem.id}>
          <TodoItem
            todoItem={todoItem}
          />
        </li>)
    }) : 'loading data ...'}
    </ul>

  )
}
