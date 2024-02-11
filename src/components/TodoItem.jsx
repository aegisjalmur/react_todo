import React from 'react'

const TodoItem = ({title, completed, id, toggleTodo, deleteTodo}) => {
  return (
    <li key={id}>
      {title}
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <input
        type="button"
        value="delete"
        onClick={() => deleteTodo(id)}
      />
    </li>
  );
}

export default TodoItem