import React from 'react'

import TodoItem from './TodoItem'

export default function TodoItems ({ todoItems }) {
  return (
    <div>{todoItems ? todoItems.map(todoItem => {
      return <TodoItem
        key={todoItem.id}
        todoItem={todoItem}

      />
    }) : 'loading data ...'}
    </div>

  )
}
