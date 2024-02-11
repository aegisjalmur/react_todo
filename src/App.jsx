import { useState } from 'react'
import { nanoid } from "nanoid";
import './App.css'

import NewTodoForm from './components/NewTodoForm';
import TodoList from "./components/TodoList";



function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: nanoid(), title: title, completed: false },
      ];
    })
  };
  
  const toggleTodo = (id, checked) => {
    setTodos((currentTodos) => {
      return currentTodos.map((elt) => {
        if (elt.id === id) {
          return { ...elt, completed: checked };
        }
        return elt;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(elt => elt.id !== id)
    })
  }

  return (
    <>
      <h2>New Item</h2>
      <NewTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App
